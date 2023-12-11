import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOutLeft } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";
import lessonsMock from './fixtures/lessons.json';
import LessonBox from "../../components/ExBox/LessonBox";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Lessons = ({ data, onClick, changePage }: { data: typeof lessonsMock, onClick: any, changePage: any }) => {

  const renderItem = ({ item }: { item: any }) => (
    <LessonBox
      id={item.id}
      key={item.id}
      title={item.title}
      description={item.content}
      onClick={() => {
        onClick(item.id);
      }}
      exercisesLength={item.exercises.length}
    />
  );

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.scrollViewContent}
      entering={FadeIn.duration(200)}
      exiting={FadeOutLeft.duration(200)}
    >
      <View className="w-full mt-2">
        <View className="justify-center items-start w-full ">
          <TouchableOpacity className="flex-row justify-center" onPress={() => { changePage('Modules') }}>
            <MaterialCommunityIcons name="chevron-left" color="gray" size={30} />
            <Text className="ml-2 text-gray-500 text-lg font-semibold mb-2">Lições</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.flatListContent}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  flatListContent: {
    flexDirection: "row", 
    justifyContent: "center", 
    flexWrap: "wrap", 
    width: "100%", 
    marginTop: 6,
    paddingBottom: 40 
  },
  header: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    paddingHorizontal: 18,
    paddingTop: 45
  },
  scrollViewContent:{
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    paddingHorizontal: 18,
    paddingTop: 40
  }
});

export default Lessons;