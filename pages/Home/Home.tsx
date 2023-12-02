import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ExBox from "../../components/ExBox/ExBox";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
    return(
        <View className="flex-1 justify-start items-center bg-[#f0f0f0] px-4">
            <View className="mt-8 flex justify-center items-center h-32 w-full">
                <Image className="w-40 h-40" source={{uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',}} />
            </View>
            
            <View className="w-full mt-2">
                <Text className="text-gray-500 text-lg font-semibold mb-2 ml-4">Módulos</Text>       
                <ExBox />
                <ExBox />
                <ExBox />
                <ExBox />
                <ExBox />
            </View>
        </View>
    );
}

export default Home;