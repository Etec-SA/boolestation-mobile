import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const PlacingR = () => {
    return(
            <View style={styles.placing}>
                <View style={styles.primeiro}>
                    <Text style={styles.textOne}>1</Text>
                </View>
                <View style={styles.segundo}>
                    <Text style={styles.textOne}>Giovanna Nunes</Text>
                </View>
                <View style={styles.terceiro}>
                    <Ionicons name='trophy' size={30} color={'#f0f0f0'}></Ionicons> 
                    <Text style={styles.numero}>224</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    placing:{
        backgroundColor: '#28282B',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        marginTop: 20,
        borderRadius: 8,
        paddingHorizontal: 10,
        shadowColor: '#28282B', // Cor da sombra
        shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra (x, y)
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 3, // Raio da sombra

    },
    primeiro:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        padding: 10
    },
    textOne:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f0f0f0'
    },
    segundo:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '60%',
        padding: 10
    },
    terceiro:{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
        padding: 10
    },
    numero:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f0f0f0'
    }
})

export default PlacingR;