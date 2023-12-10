import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const LessonBox = ({title, description, exercisesLength, onClick}: {title: string, description: string, exercisesLength: number, onClick: ()=> any}) => {
    return(
        <TouchableOpacity onPress={onClick}>
            <View className="flex-column justify-start gap-y-1 items-center w-40 h-60 rounded-3xl p-4 m-2 bg-[#fff] shadow-md">
                <View className="w-full h-[10%]">
                    <Text className="text-base font-bold text-[#1ED616]">{title}</Text>
                </View>

                <View className="flex-column justify-between w-full h-[90%]">
                    <View className="w-full py-2">
                        <Text className="text-gray-500 text-left text-xs font-base">{description}</Text>
                    </View>

                    <View className="flex-row items-center w-full py-2">
                        <MaterialCommunityIcons name="bookmark" color="#1ED616" size={14} />
                        <Text className="text-[#1ED616] text-xs text-left font-bold">{exercisesLength} Exercícios</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LessonBox;