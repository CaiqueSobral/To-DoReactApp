import { View, Text } from 'react-native';

type goalItemProps = {
  text: string;
};

export default function GoalItem(props: goalItemProps) {
  return (
    <View className="self-center justify-self-center flex items-center justify-center h-16 mb-6 bg-neutral-400 w-[80%] rounded-xl">
      <Text className="text-2xl text-gray-50">{props?.text}</Text>
    </View>
  );
}
