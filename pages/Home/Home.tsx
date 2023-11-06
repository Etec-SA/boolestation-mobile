import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ExBox from "../../components/ExBox/ExBox";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
    return(
        <View style={styles.container}>
            <ExBox />
            <ExBox />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: '#141415',
        paddingHorizontal: 18
    },
    title:{
        color: '#f0f0f0'
    }
})

export default Home;