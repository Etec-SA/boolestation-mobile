import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const ExBox = () => {
    return(
        <View className="flex-row-reverse w-full p-4 rounded-3xl my-4 bg-[#28282B]">
            <View className="w-3/4">
                <View className="p-2">
                    <Text className="text-xl font-bold text-gray-200">Lógica Aristotélica</Text>
                </View>
                <View className="p-2">
                    <Text className="italic text-gray-200 text-justify">Módulo onde aprenderemos sobre teoria dos silogismos</Text>
                </View>
            </View>
            <View className="p-2 flex justify-between items-center gap-4">
                <TouchableOpacity style={styles.btnStart}><Text style={styles.btnText}>Iniciar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStart:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ED616',
        width: '100%',        
        borderRadius: 8,
        padding: 4,
        height: 30
    },
    btnText:{
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnLike:{
        backgroundColor: '#d70b19',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',        
        borderRadius: 8,
        padding: 4,
        height: 30
    }
});

export default ExBox;