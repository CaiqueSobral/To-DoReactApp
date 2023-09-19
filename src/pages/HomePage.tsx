import { useState } from 'react';
import {
  FlatList,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

type GoalType = {
  text: string;
  id: string;
};

export default function HomePage() {
  const insets = useSafeAreaInsets();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState<Array<GoalType>>([]);

  function toggleModalAddGoal() {
    setIsModalVisible((oldIsVisible) => !oldIsVisible);
  }

  function addGoalHandler(enteredGoalText: string) {
    if (enteredGoalText) {
      setGoals((oldGoals) => {
        return [
          ...oldGoals,
          { text: enteredGoalText, id: Math.random().toString() },
        ];
      });
    }
    toggleModalAddGoal();
  }

  function removeGoal(key: string) {
    setGoals((oldGoals) => oldGoals.filter((goal) => goal.id !== key));
  }

  return (
    <View className="flex-1 bg-neutral-600">
      {isModalVisible && (
        <GoalInput addGoal={addGoalHandler} toggleModal={toggleModalAddGoal} />
      )}
      <FlatList
        contentContainerStyle={{
          paddingTop: insets.top,
        }}
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity
              className="self-center mt-2 mb-6 bg-neutral-400 py-2 px-4 rounded-full shadow-xl"
              onPress={toggleModalAddGoal}
            >
              <Text className="text-gray-50 text-lg">Add a new Goal</Text>
            </TouchableOpacity>
          );
        }}
        data={goals}
        renderItem={(goaldata) => {
          return (
            <GoalItem
              text={goaldata.item.text}
              id={goaldata.item.id}
              onRemoveGoal={removeGoal}
            />
          );
        }}
      />
    </View>
  );
}

// <View className="flex-1 pt-[10%] items-center bg-neutral-600">
//  c
//   {isModalVisible && (
//     <GoalInput addGoal={addGoalHandler} toggleModal={toggleModalAddGoal} />
//   )}

//   <View className="self-stretch bg-red-500">
//     <FlatList
//       className="flex pt-4 mb-4 h-max"
//       data={goals}
//       renderItem={(goalData) => {
//         return (
//           <GoalItem
//             text={goalData.item.text}
//             id={goalData.item.id}
//             onRemoveGoal={removeGoal}
//           />
//         );
//       }}
//     />
//   </View>
// </View>
