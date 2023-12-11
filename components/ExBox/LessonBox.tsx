import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";
import cache from "../../cache";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const LessonBox = ({id, title, description, exercisesLength, onClick}: {id: string, title: string, description: string, exercisesLength: number, onClick: ()=> any}) => {
    const [percentage, setPercentage] = useState('');
    useEffect(() => {
        const status = cache.getItem<any>('lessonsStatus');
        
        if (status && status[id]) {
          const completed = Object.keys(status[id]).length;
          const value = (completed / exercisesLength) * 100;
          setPercentage(value.toFixed(2));
        } else {
          setPercentage('0.00');
        }
      }, [id, exercisesLength]);

    return(
        <TouchableOpacity onPress={onClick}>
            <View className="flex-column justify-start gap-y-1 items-center w-40 h-60 rounded-3xl p-4 m-2 bg-[#28282B] shadow-md">
                <View className="w-full h-[10%]">
                    <Text className="text-base font-bold text-[#1ED616]">{title} {percentage == '100.00' ? "⭐" : null}</Text>
                </View>

                <View className="flex-column justify-between w-full h-[90%]">
                    <View className="w-full py-2">
                        <Text className="text-[#f0f0f0] text-left text-xs font-base">{description}</Text>
                    </View>

                    <View className="flex-row items-center w-full py-2">
                        <MaterialCommunityIcons name="bookmark" color="#1ED616" size={14} />
                        <Text className="text-[#1ED616] text-xs text-left font-bold">{exercisesLength} | {percentage}%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LessonBox;