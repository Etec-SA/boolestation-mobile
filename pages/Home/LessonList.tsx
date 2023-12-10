import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { FadeIn, FadeOutLeft } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";
import lessonsMock from './fixtures/lessons.json';
import LessonBox from "../../components/ExBox/LessonBox";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Lessons = ({ data, onClick, changePage }: { data: typeof lessonsMock, onClick: any, changePage: any }) => {

  return (
    <Animated.View
      className="flex-1 bg-[#f0f0f0] px-4 pt-14"
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

        <View className="flex-row justify-center flex-wrap w-full mt-6">
          {
            data.map((lesson, index) => (
              <LessonBox
                key={lesson.id}
                title={lesson.title}
                description={lesson.content}
                onClick={() => {
                  onClick(lesson.id);
                }}
                exercisesLength={lesson.exercises.length}
              />
            ))
          }
        </View>
      </View>
    </Animated.View>
  );
}

export default Lessons;
