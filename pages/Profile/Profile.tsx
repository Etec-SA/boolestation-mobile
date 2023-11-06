import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141415',
        paddingHorizontal: 18
    },
    title:{
        color: '#f0f0f0'
    }
})

export default Profile;