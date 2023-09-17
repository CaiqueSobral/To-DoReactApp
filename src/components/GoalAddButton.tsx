import { TouchableOpacity, Text } from 'react-native';

type props = {
  addGoalHandler: () => void;
};

export default function GoalAddButton(props: props) {
  return (
    <TouchableOpacity
      className="py-1.5 px-6 bg-neutral-400 rounded-2xl"
      onPress={props.addGoalHandler}
    >
      <Text className="text-gray-200 text-l">Add Goal</Text>
    </TouchableOpacity>
  );
}
