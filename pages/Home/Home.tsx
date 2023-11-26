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
            <View style={styles.header}>
                <Text style={styles.title}>BooleStation</Text>
                <Text style={styles.subtitle}></Text>
            </View>
            
            <View style={styles.boxEx}>
                <Text style={styles.titleModel}>Módulos</Text>       
                <ExBox />
                <ExBox />
                <ExBox />
            </View>
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
        color: '#f0f0f0',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    titleModel:{
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 16
    },
    header:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: '100%'
    },
    subtitle:{
        textAlign: 'justify',
        color: '#f0f0f0',
        fontSize: 15,
        fontStyle: 'italic'
    },
    boxEx:{
        width: '100%',
    },
    boxInfo:{

    },
})

export default Home;