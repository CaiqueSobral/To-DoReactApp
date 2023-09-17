import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type props = {
  addGoal: (text: string) => void;
};

export default function GoalInput(props: props) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputTextHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function AddGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View className="flex flex-row justify-between mt-4 pb-8 mb-4 border-b-gray-500 border-b-[1.5px]">
      <TextInput
        className="border-[1.5px] w-[60%] mr-[5%] border-gray-400 rounded-lg pl-4 text-lg text-gray-50"
        placeholder="New goal"
        placeholderTextColor={'#999'}
        onChangeText={goalInputTextHandler}
        value={enteredGoalText}
      ></TextInput>
      <TouchableOpacity
        className="py-1.5 px-6 bg-neutral-400 rounded-2xl"
        onPress={AddGoalHandler}
      >
        <Text className="text-gray-200 text-l">Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
}
