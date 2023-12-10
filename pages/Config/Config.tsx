import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Config = () => {
    return (
        <SafeAreaView className="flex-1 justify-start items-center bg-[#f0f0f0] pt-16">
          <View className="w-full bg-[#000] p-4 rounded-3xl my-3 bg-[#fff] shadow-md">
            <MaterialCommunityIcons name="exit-to-app" color="gray" size={30} />
            <Text>Sair</Text>
          </View>
        </SafeAreaView>
    )
}

export default Config;