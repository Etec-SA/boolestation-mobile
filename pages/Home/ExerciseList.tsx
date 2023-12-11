import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import Animated, { FadeIn, FadeOutLeft } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";
import lessonsMock from './fixtures/lessons.json';
import cache from "../../cache";

NativeWindStyleSheet.setOutput({
    default: "native",
  });

const Exercises = ({data, onClick, changePage}: {data: typeof lessonsMock[0]['exercises'], onClick: any, changePage: any}) => {
  const [cachedData, setCachedData] = useState<any>({});
  
  useEffect(()=>{
    const item = cache.getItem('exercisesStatus');
    setCachedData(item || {});
  }, [data]);

    return(
        <Animated.ScrollView
          contentContainerStyle={styles.scrollViewContent}
          entering={FadeIn.duration(200)}
          exiting={FadeOutLeft.duration(200)}  
        >
          <View className="flex-row justify-between items-center w-full h-16 mb-4">                    
            <TouchableOpacity className="flex-row justify-center" onPress={()=>{changePage('Lessons')}}>
              <MaterialCommunityIcons name="chevron-left" color="gray" size={30} />
              <Text className="ml-2 text-gray-500 text-lg font-semibold mb-2">Exercícios</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnExit} onPress={()=>{changePage('Theory')}}>
              <MaterialCommunityIcons name="notebook" color="gray" size={30} />
            </TouchableOpacity>
          </View>

          {
            data.map((exercise)=>{
              return (
                <TouchableOpacity className="w-full" onPress={()=> {onClick(exercise.id)}} key={exercise.id}>
                  <View className="p-4 flex-row justify-between items-center w-full mb-4 bg-[#fff] rounded shadow-md">                   
                    <Text className="text-gray-500 text-xl">{exercise.title}</Text>
                    { cachedData[exercise.id]?.lastAttemptIsCorrect ? <MaterialCommunityIcons name="check" color="black" size={25} /> : null }
                    { cachedData[exercise.id]?.lastAttemptIsCorrect === false ? <MaterialCommunityIcons name="close" color="black" size={25} /> : null }
                  </View>
                </TouchableOpacity>
              )
            })
          }                
        </Animated.ScrollView>
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
  },
  scrollViewContent:{
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    paddingHorizontal: 18,
    paddingTop: 40
  }
})

export default Exercises;