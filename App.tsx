import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';

const hello = 'Salve World';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600">
      <View className="px-8 py-4 flex justify-center items-center bg-gray-400 rounded-md">
        <Text className="text-gray-50">{hello}</Text>
      </View>
      <Text className="text-gray-50 my-5">Aqui tem mais texto!</Text>
      <TouchableOpacity className="px-8 py-4 flex justify-center items-center bg-gray-400 rounded-md">
        <Text className="text-gray-50">Tap Me!</Text>
      </TouchableOpacity>
    </View>
  );
}
