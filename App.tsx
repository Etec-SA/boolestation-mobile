import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import ProfileMenu from './pages/ProfileMenu';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <ProfileMenu/>
  );
}
