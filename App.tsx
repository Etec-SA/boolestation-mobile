import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className='flex justify-center items-center w-screen h-screen bg-black'>
      <Text className="text-3xl text-red-300">Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
