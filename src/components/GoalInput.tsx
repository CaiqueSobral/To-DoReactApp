import { useState } from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  addGoal: (text: string) => void;
  toggleModal: () => void;
};

export default function GoalInput(props: Props) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  // function goalInputTextHandler(enteredText: string) {
  //   setEnteredGoalText(enteredText);
  // }

  function AddGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal animationType="fade" transparent={true}>
      <Pressable
        className="flex-1 justify-center bg-neutral-600 opacity-90"
        onPress={props.toggleModal}
      >
        <View className="w-[90%] self-center py-8 flex-col justify-center items-center bg-neutral-700 opacity-95 rounded-2xl shadow-2xl">
          <TextInput
            className="border-[1.5px] w-[75%] border-gray-400 rounded-full p-2 text-xl mb-5 text-center text-gray-50"
            placeholder="New goal"
            placeholderTextColor={'#666'}
            onChangeText={setEnteredGoalText}
            value={enteredGoalText}
          ></TextInput>
          <TouchableOpacity
            className="py-1.5 px-6 bg-neutral-400 rounded-full shadow-md"
            onPress={AddGoalHandler}
          >
            <Text className="text-gray-200 text-lg">Add Goal</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}
