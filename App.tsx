import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 pt-[10%] items-center bg-gray-600">
      <View className="flex flex-row justify-between mt-4 pb-8 mb-4 border-b-gray-500 border-b-[1.5px]">
        <TextInput
          className="border-[1.5px] w-[60%] mr-[5%] border-gray-400 rounded-xl pl-4 text-lg"
          placeholder="Your course goal!"
          placeholderTextColor={'#999'}
        ></TextInput>
        <TouchableOpacity className="py-1.5 px-6 bg-gray-400 rounded-2xl">
          <Text className="text-gray-200 text-l">Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View className="flex items-center grow w-full">
        <Text className="text-gray-200">List of Goals</Text>
      </View>
    </View>
  );
}
