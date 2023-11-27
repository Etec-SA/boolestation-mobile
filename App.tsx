import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Exercise from './pages/Exercise';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className='flex justify-center items-center w-full h-full bg-[#141415]'>
      <Exercise 
          statement={
            {
              title: 'Equivalência da Implicação', 
              description: 'Quais das seguintes fórmulas é equivalente a uma implicação?',
            }
          }
          alternatives={[
            {title: '¬¬(A ^ ¬¬A)'},
            {title: 'A ^ A'},
            {title: '¬P v Q', isCorrect: true},
            {title: 'A ^ ¬A'}
          ]}
        />
    </View>
  );
}
