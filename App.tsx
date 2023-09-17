import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

let nextId = 0;

export default function App() {
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
        <TextInput
          className="border-[1.5px] w-[60%] mr-[5%] border-gray-400 rounded-lg pl-4 text-lg text-gray-50"
          placeholder="New goal"
          placeholderTextColor={'#999'}
          onChangeText={goalInputTextHandler}
        ></TextInput>
        <TouchableOpacity
          className="py-1.5 px-6 bg-neutral-400 rounded-2xl"
          onPress={addGoalHandler}
        >
          <Text className="text-gray-200 text-l">Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View className="self-stretch">
        <FlatList
          className="flex pt-4 mb-4"
          data={goals}
          renderItem={(goalData) => {
            return (
              <View className="self-center justify-self-center flex items-center justify-center h-16 mb-6 bg-neutral-400 w-[80%] rounded-xl">
                <Text className="text-2xl text-gray-50">
                  {goalData.item.text}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
