import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
  });

const Header = () => {   
    return (
        <View className="mt-8 flex justify-center items-center w-full">
            <Image
                className="w-40 h-40"
                source={{
                    uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',
                }}
            />

            <Text className="text-gray-500 text-lg font-semibold ml-4">Módulo</Text>
        </View>
    )   
}

export default Header;
