import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import GoalAddButton from '../components/GoalAddButton';

export default function HomePage() {
  type goalType = {
    text: string;
    key: number;
  };

  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [goals, setGoals] = useState<Array<goalType>>([]);

  function goalInputTextHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals([...goals, { text: enteredGoalText, key: Math.random() }]);
  }

  return (
    <View className="flex-1 pt-[10%] items-center bg-neutral-600">
      <View className="flex flex-row justify-between mt-4 pb-8 mb-4 border-b-gray-500 border-b-[1.5px]">
        <GoalInput goalInputHandler={goalInputTextHandler} />
        <GoalAddButton addGoalHandler={addGoalHandler} />
      </View>
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
