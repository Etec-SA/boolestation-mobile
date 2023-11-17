import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Profile = () => {
    return(
        <View style={styles.container}>
            <View style={styles.photoBox}>
                <View></View>
                <View style={styles.atribute}>
                    <Text style={styles.tilte}>pucaloe</Text>
                    <Text style={styles.secTitle}>Luca Poe</Text>
                    <Text style={styles.secTitle}>O Aprendiz</Text>
                </View>
            </View>

            <View style={styles.dataBox}>
                <View style={styles.points}>
                    <Text style={styles.tit}>100</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#141415',
        paddingHorizontal: 18
    },
    photoBox:{

    },
    tilte:{

    },
    secTitle:{

    },
    atribute:{

    },
    dataBox:{

    },
    points:{

    },
    tit:{

    },
})

export default Profile;