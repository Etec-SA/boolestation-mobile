import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlacingR from "../../components/PlacingRanking/PlacingR";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Ranking = () => {
    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Ranking Geral</Text>
                    <Text style={styles.subtitle}>Bem-vindo ao nosso ranking! Estamos entusiasmados por você se juntar à nossa comunidade.</Text>
                </View>
                <PlacingR />
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
        color: '#ff375b',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8
    },
    header:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 120,
        width: '100%'
    },
    subtitle:{
        textAlign: 'justify',
        color: '#f0f0f0',
        fontSize: 15,
        fontStyle: 'italic'
    }
})

export default Ranking;