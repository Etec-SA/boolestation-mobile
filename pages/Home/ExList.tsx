import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
  });

const ExList = () => {
    return(
        <View>
            <Text>Exercicios</Text>
        </View>
    )
}

export default ExList;