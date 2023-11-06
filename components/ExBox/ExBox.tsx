import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const ExBox = () => {
    return(
        <View className="bg-[#28282B] p-4 rounded-md my-4 w-full">
            <View className="p-4">
                <Text className="text-xl font-bold text-gray-200">Introduction to Logic</Text>
                <Text className="italic text-gray-200">25 questions</Text>
            </View>
            <View className="p-4">
                <Text className="italic text-gray-200 text-justify">A descrição ocorre pela necessidade de explicar como são os seres, os objetos ou os lugares aos quais se faz referência. Descrever um ser, objeto ou lugar é apresentá-los por meio das palavras, de forma que quem não os conhece possa fazer uma ideia de como são.</Text>
            </View>
            <View className="p-4 flex justify-between items-center gap-4">
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