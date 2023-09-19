import { View, Text, TouchableOpacity, Vibration } from 'react-native';

type GoalItemProps = {
  text: string;
  id: string;
  onRemoveGoal: (key: string) => void;
};

export default function GoalItem(props: GoalItemProps) {
  function removeGoal() {
    props.onRemoveGoal(props?.id);
  }

  return (
    <TouchableOpacity
      onLongPress={() => {
        removeGoal();
        Vibration.vibrate(100);
      }}
      activeOpacity={0.7}
      className="transition-all"
    >
      <View className="self-center justify-self-center flex items-center justify-center h-16 mb-6 bg-neutral-400 w-[80%] rounded-xl shadow-md">
        <Text className="text-2xl text-gray-50">{props?.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
