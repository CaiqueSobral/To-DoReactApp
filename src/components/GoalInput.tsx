import { TextInput } from 'react-native';

type textInputProp = {
  goalInputHandler: (text: string) => void;
};

function GoalInput(props: textInputProp) {
  return (
    <TextInput
      className="border-[1.5px] w-[60%] mr-[5%] border-gray-400 rounded-lg pl-4 text-lg text-gray-50"
      placeholder="New goal"
      placeholderTextColor={'#999'}
      onChangeText={props.goalInputHandler}
    ></TextInput>
  );
}

export default GoalInput;
