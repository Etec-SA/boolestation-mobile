import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const PlacingR = () => {
    return(
        <View className="bg-white flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
            <View className="w-1/10 p-2">
                <Text className="text-[#DAA520] font-bold text-lg">1</Text>
            </View>
            <View className="w-3/5 p-2">
                <Text className="text-[#DAA520] font-bold text-lg">Aristóteles</Text>
            </View>
            <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                <Ionicons name='trophy' size={30} color={'#DAA520'} />
                <Text className="text-[#DAA520] font-bold text-lg">900</Text>
            </View>
        </View>
    );
}

export default PlacingR;