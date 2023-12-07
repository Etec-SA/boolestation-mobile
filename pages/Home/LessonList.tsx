import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";
import lessonsMock from './fixtures/lessons.json';
import ExBox from "../../components/ExBox/ExBox";

NativeWindStyleSheet.setOutput({
    default: "native",
  });

const Lessons = ({data, onClick}: {data: typeof lessonsMock, onClick: any}) => {
    return(
      <View className="flex-1 justify-start items-center bg-[#f0f0f0] px-4">
        <View className="mt-8 flex justify-center items-center h-32 w-full">
          <Image
            className="w-40 h-40"
            source={{
              uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',
            }}
          />
        </View>

      <View className="w-full mt-2">
        <Text className="text-gray-500 text-lg font-semibold mb-2 ml-4">Lições</Text>
          {
              data.map(lesson=>{
                return (
                  <ExBox 
                    key={lesson['id']} 
                    title={lesson['title']} 
                    description={lesson.content}
                    onClick={()=>{
                      onClick(lesson.id);
                    }}
                  />
                )
              })
            }  
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

export default Lessons;