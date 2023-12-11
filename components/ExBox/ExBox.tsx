import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const ExBox = ({title, description, onClick}: {title: string, description: string, onClick: ()=> any}) => {
    return(
        <View className="flex-row-reverse justify-between w-full p-4 rounded-3xl my-3 bg-[#28282B] shadow-md">
            <View className="w-3/4 pl-1">
                <View className="p-2">
                    <Text className="text-lg font-bold text-[#fff]">{title}</Text>
                </View>
                <View className="p-2">
                    <Text className="text-[#f0f0f0] text-left font-medium">{description}</Text>
                </View>
            </View>

            <View className=" flex items-center justify-center w-1/4">
                <TouchableOpacity 
                    className="flex items-center justify-center bg-[#1ED616] w-16 h-16 rounded-full"
                    onPress={onClick}
                >
                    <Ionicons name='play-circle-outline' size={30} color={'#f0f0f0'}></Ionicons> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExBox;