import { useState } from 'react';
import { FlatList, View } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function HomePage() {
  type goalType = {
    text: string;
    id: string;
  };

  const [goals, setGoals] = useState<Array<goalType>>([]);

  function addGoalHandler(enteredGoalText: string) {
    setGoals([
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function removeGoal(key: string) {
    setGoals(goals.filter((goal) => goal.id !== key));
  }

  return (
    <View className="flex-1 pt-[10%] items-center bg-neutral-600">
      <GoalInput addGoal={addGoalHandler} />

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
