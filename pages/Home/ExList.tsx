import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
  });

const ExList = () => {
    return(
        <View className="flex-1 justify-start items-center bg-[#141415] px-4">
            <View className="p-4 flex-row justify-between items-center w-full h-16 mb-4">                    
                <Text className="text-white text-lg">Silogismos</Text>
                <TouchableOpacity style={styles.btnExit}>
                    <Ionicons name='close' size={24} color={'#f0f0f0'}></Ionicons>
                </TouchableOpacity>
            </View>

            <View className="p-4 bg-[#28282B] w-full mb-4 rounded shadow-md">
                <Text className="text-white text-xl">Invalidade de Silogismos</Text>
            </View>
            
            <View className="p-4 flex-row justify-between items-center w-full mb-4 bg-[#165724] rounded shadow-md">
                <Text className="text-[#d4edda] text-xl">Justificação de Silogismos</Text>
                <Ionicons name="checkmark-outline" size={24} color={'#d4edda'}></Ionicons>
            </View>

            <View className="p-4 flex-row justify-between items-center w-full mb-4 bg-[#942e30] rounded shadow-md">
                <Text className="text-[#f8d7da] text-xl">Valorização de Silogismos</Text>
                <Ionicons name="close-outline" size={24} color={'#f8d7da'}></Ionicons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: '#141415',
    paddingHorizontal: 18
  },
  header:{
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginBottom: 20,
  },
  boxEx:{
    backgroundColor: '#28282B',
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#28282B", 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
  },
  txTitle:{
    color: '#f0f0f0',
    fontSize: 19,
  },
  MainTitle:{
    color: '#f0f0f0',
    fontSize: 16,
    padding: 2,
    textAlign: 'center'
  },
  btnExit:{
    padding: 2,
  },
  gdEx:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#165724",
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#165724", 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
  },
  gdTxt:{
    color: '#d4edda',
    fontSize: 19,
  },
  wgTxt:{
    color: '#f8d7da',
    fontSize: 19,
  },
  wgEx:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#942e30', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
    backgroundColor: '#942e30',
  }
})

export default ExList;