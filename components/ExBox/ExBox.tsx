import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const ExBox = () => {
    return(
        <View className="flex-row-reverse justify-between w-full p-4 rounded-3xl my-4 bg-[#28282B]">
            <View className="w-3/4 pl-1">
                <View className="p-2">
                    <Text className="text-xl font-bold text-gray-200">Lógica Aristotélica</Text>
                </View>
                <View className="p-2">
                    <Text className="italic text-gray-200 text-justify">Módulo onde aprenderemos sobre teoria dos silogismos</Text>
                </View>
            </View>

            <View className="w-1/4" style={styles.btnBox}>
                <TouchableOpacity style={styles.btnStart}>
                    <Ionicons name='play-circle-outline' size={30} color={'#f0f0f0'}></Ionicons> 
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStart:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ED616',
        width: 70,
        height: 70,        
        borderRadius: 100
    },
    btnText:{
        color: '#f0f0f0',
        fontSize: 12,
    },
    btnLike:{
        backgroundColor: '#d70b19',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',        
        borderRadius: 8,
        padding: 4,
        height: 30
    },
    btnBox:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExBox;