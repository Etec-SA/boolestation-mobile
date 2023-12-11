import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Config = () => {
    return (
        <SafeAreaView className="flex-1 justify-start items-center bg-[#141415] pt-16 px-4">
          <TouchableOpacity className="w-full" onPress={()=>{}}>
                  <View className="p-4 flex-row justify-start items-center w-full mb-4 bg-[#28282B] rounded shadow-md">
                    <MaterialCommunityIcons name="exit-to-app" color="#f0f0f0" size={30} />                   
                    <Text className="text-[#f0f0f0] text-xl font-bold ml-2">Sair</Text>
                  </View>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Config;