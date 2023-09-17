import { useState } from 'react';
import {
  FlatList,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function HomePage() {
  type goalType = {
    text: string;
    id: string;
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState<Array<goalType>>([]);

  function toggleModalAddGoal() {
    setModalVisible(!isModalVisible);
  }

  function addGoalHandler(enteredGoalText: string) {
    if (enteredGoalText) {
      setGoals([
        ...goals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
    }
    toggleModalAddGoal();
  }

  function removeGoal(key: string) {
    setGoals(goals.filter((goal) => goal.id !== key));
  }

  return (
    <View className="flex-1 pt-[10%] items-center bg-neutral-600">
      <TouchableOpacity
        className="mt-2 mb-6 bg-neutral-400 py-2 px-4 rounded-full shadow-xl"
        onPress={toggleModalAddGoal}
      >
        <Text className="text-gray-50 text-lg">Add a new Goal</Text>
      </TouchableOpacity>
      {isModalVisible && (
        <GoalInput addGoal={addGoalHandler} toggleModal={toggleModalAddGoal} />
      )}

      <View className="self-stretch">
        <FlatList
          className="flex pt-4 mb-4"
          data={goals}
          renderItem={(goalData) => {
            return (
              <GoalItem
                text={goalData.item.text}
                id={goalData.item.id}
                onRemoveGoal={removeGoal}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
