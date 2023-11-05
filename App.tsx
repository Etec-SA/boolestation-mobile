import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Exercise from './pages/Exercise';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className='flex justify-center items-center w-screen h-screen bg-black'>
      <Exercise 
          statement={
            {
              title: 'Exercício 1', 
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum modi amet reprehenderit quas sint, iure asperiores totam delectus nobis debitis obcaecati numquam maiores doloremque quis officia harum voluptatibus odit eum.',
            }
          }
          alternatives={[
            {title: 'Alternativa 1'},
            {title: 'Alternativa 2'},
            {title: 'Alternativa 3', isCorrect: true},
            {title: 'Alternativa 4'}
          ]}
        />
    </View>
  );
}
