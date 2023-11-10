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
            <View className="flex w-full justify-center items-center flex-col mt-10" id="userPhoto">
                <View>
                    <View className="w-[150px] h-[150px] bg-white rounded-full"></View>
                </View>
                <View style={styles.boxName}>
                    <Text className="text-white text-lg my-6">Gabriel Gamon</Text>
                    <Ionicons name='checkmark-circle' size={20} color={'#f0f0f0'}></Ionicons>
                </View>
            </View>

            <View className="flex w-full justify-center items-center flex-col">
                <View style={styles.boxAtribute}>
                    <Text className="text-white">Estudante Proposicional</Text>
                    <Text className="text-white">200</Text>
                </View>
            </View>

{/*            <View className="flex w-full justify-center items-center flex-col">
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Editar Perfil</Text>
                </TouchableOpacity>
            </View> */}
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
    title:{
        color: '#f0f0f0'
    },
    boxName:{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%'
    },
    boxAtribute:{
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10, 
        gap: 10
    },
    btn:{
        width: '95%',
        height: 34,
        backgroundColor: '#1ED616',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 8,
        padding: 14,
        shadowColor: "#1ED616", // Cor da sombra
        shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra (x, y)
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 3, // Raio da sombra
    },
    btnText:{
        color: '#f0f0f0',
        fontSize: 16,
    }
})

export default Profile;