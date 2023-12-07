import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

interface LinkProps {
    onPress: () => void;
}

const Link: React.FC<LinkProps> = ({ onPress }: LinkProps) => {
    return (
        <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 mt-8 text-sm">Já possui uma conta?</Text>
            <TouchableOpacity onPress={onPress} >
                <Text className="text-gray-600 mt-8 text-sm italic underline ml-1">Entrar agora</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Link;