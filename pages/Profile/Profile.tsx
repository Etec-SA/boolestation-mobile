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
              <View style={styles.header}>
                <Text style={styles.perfilT}>Perfil</Text>
              </View>
                <View className="rounded-full" style={styles.profile}></View>
                <View style={styles.atribute}>
                    <Text style={styles.tilte}>Luca Poe</Text>
                    <Text style={styles.secTitle}>pucaloe</Text>
                </View>
                <View style={styles.dataBox}>
                  <View className="rounded-full" style={styles.points}>
                      <Text style={styles.tit}>200</Text>
                  </View>                  
                  <View style={styles.expBox}>
                    <Text style={styles.exp}>Exp Atual</Text>
                    <Text style={styles.secTitl}>Titulo: O Aprendiz</Text>
                  </View> 
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
        backgroundColor: '#141415'
    },
    photoBox:{
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#28282B',
      width: '100%',
      padding: 10,
      height: 380,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      gap: 20,
    },
    tilte:{
      fontSize: 24,
      color: '#f0f0f0',
      fontWeight: 'bold'
    },
    secTitle:{
      fontSize: 16,
      color: '#f0f0f0',
    },
    secTitl:{
      fontSize: 16,
      color: '#28282B',
    },
    atribute:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dataBox:{
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      width: '80%',
      height: 200,
      position: "absolute",
      top: '90%',
      borderRadius: 30,
      gap: 20,
      padding: 10,
      shadowColor: "#f0f0f0", 
      shadowOffset: { width: 0, height: 8 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 3, 
    },
    points:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      height: 90,
      borderWidth: 3,
      borderColor: '#28282B'
    },
    perfilT:{
      fontSize: 18,
      color: '#f0f0f0',
    },
    profile:{
      backgroundColor: '#f0f0f0',
      height: 150,
      width: 150,
      
    },
    header:{
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tit:{
      color: '#28282B',
      fontWeight: '600',
      fontSize: 30
    },
    expBox:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    exp:{
      color: '#28282B',
      fontSize: 20,
      fontWeight: '600',
    },
    expT:{
      color: '#28282B',
      fontSize: 16,
      fontWeight: '400',
    }
})

export default Profile;