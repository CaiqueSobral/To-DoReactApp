import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function HomePage() {
  type goalType = {
    text: string;
    key: number;
  };

  const [goals, setGoals] = useState<Array<goalType>>([]);

  function addGoalHandler(enteredGoalText: string) {
    setGoals([...goals, { text: enteredGoalText, key: Math.random() }]);
  }

  return (
    <View className="flex-1 pt-[10%] items-center bg-neutral-600">
      <GoalInput addGoal={addGoalHandler} />

      <View className="self-stretch">
        <FlatList
          className="flex pt-4 mb-4"
          data={goals}
          renderItem={(goalData) => {
            return <GoalItem text={goalData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}
