import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [goals, setGoals] = useState<string[]>([]);

  function goalInputTextHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals: string[]) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View className="flex-1 pt-[10%] items-center bg-neutral-600">
      <View className="flex flex-row justify-between mt-4 pb-8 mb-4 border-b-gray-500 border-b-[1.5px]">
        <TextInput
          className="border-[1.5px] w-[60%] mr-[5%] border-gray-400 rounded-xl pl-4 text-lg text-gray-50"
          placeholder="Your course goal!"
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
        <ScrollView className="flex pt-4 gap-4">
          {goals.map((goal, i) => (
            <View
              className="self-center flex items-center justify-center h-16 bg-neutral-400 w-[80%] rounded-xl"
              key={i}
            >
              <Text className="text-2xl text-gray-50">{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
