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
          <TouchableOpacity className="w-80 bg-red-500 p-4 rounded-3xl my-3 shadow-md text-center text-md" onPress={()=>{}}>
            Sair
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Config;