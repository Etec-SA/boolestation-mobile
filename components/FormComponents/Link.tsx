import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

interface LinkProps {
    onPress: () => void;
    title: string;
    titlePress: string;
}

const Link: React.FC<LinkProps> = ({ onPress, title, titlePress }: LinkProps) => {
    return (
        <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 mt-8 text-sm">{title}</Text>
            <TouchableOpacity onPress={onPress} >
                <Text className="text-gray-600 mt-8 text-sm italic underline ml-1">{titlePress}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Link;