import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Profile = () => {
    return(
        <View style={styles.container}>
            <View style={styles.photoBox}>
              <Image className="rounded-full" style={styles.profile}
                source={{
                  uri: 'https://i0.wp.com/educationalrenaissance.com/wp-content/uploads/2019/03/raphael_detail-aristotle-from-the-school-of-athens.jpg?fit=1200%2C1200&ssl=1',
                }}
              />
            </View>

            <View style={styles.contenteTheFato}>
              <View className="w-full p-4 rounded-3xl my-3 bg-[#fff] shadow-md">
                <View className="flex-row justify-start items-center">
                  <Text className="text-lg font-bold text-gray-500">Aristóteles</Text>
                  <Text className="text-sm font-base italic text-gray-500 ml-2">traditionalist</Text>
                </View>

                <View className="flex-row justify-center gap-x-2 w-full mt-4">
                  <TouchableOpacity className="flex-row justify-center items-center w-full h-8 bg-[#323232] rounded-full">
                  <MaterialCommunityIcons name="pencil" color="#f0f0f0" size={16} />
                    <Text className="text-[#f0f0f0] text-sm ml-1">Editar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row justify-between items-center w-full">
                <View className="flex-column justify-center items-center w-[47%] h-[200] p-4 rounded-3xl my-3 bg-[#fff] shadow-md">
                  <View className="justify-center items-center">
                    <View className="h-[70] w-[70] border-4 border-[#DAA520] justify-center items-center rounded-full">
                      <Text className="text-[#DAA520] text-xl font-black">900</Text>
                    </View>

                    <View className="justify-center items-center mt-2">
                      <Text className="text-[#323232] text-sm font-medium">Exp Atual</Text>
                    </View>
                  </View>

                  <View className="justify-center items-center">
                    <Text className="text-[#323232] text-xl font-black">O Logicista</Text>
                  </View>
                </View>

                <View className="flex-column justify-center items-center w-[47%] h-[200] p-4 rounded-3xl my-3 bg-[#fff] shadow-md">
                  <View className="justify-center items-center">
                    <View className="h-[70] w-[70] justify-center items-center rounded-full">
                      <MaterialCommunityIcons name="trophy-variant" color="#DAA520" size={60} />
                    </View>

                    <View className="justify-center items-center mt-2">
                      <Text className="text-[#323232] text-sm font-medium">Top 1</Text>
                    </View>
                  </View>

                  <View className="justify-center items-center">
                    <Text className="text-[#323232] text-xl font-black">Ranking</Text>
                  </View>
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
        backgroundColor: '#f0f0f0'
    },
    photoBox:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      padding: 10,
      height: 150,
      gap: 20,
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 3, 
    },
    tilte:{
      fontSize: 24,
      color: '#28282B',
      fontWeight: 'bold'
    },
    secTitle:{
      fontSize: 16,
      color: 'gray',
      fontStyle: "italic"
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
      marginTop: 30,
      justifyContent: "center",
      alignItems: 'center',
      width: 200,
      height: 200,
      borderRadius: 30,
      gap: 20,
      padding: 10,
      backgroundColor: "#fff"
    },
    points:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      height: 90,
      borderWidth: 3,
      borderColor: '#1ED616'
    },
    perfilT:{
      fontSize: 18,
      color: 'gray',
    },
    profile:{
      backgroundColor: '#f0f0f0',
      height: 120,
      width: 120,
      borderWidth: 2,
      borderColor: "#fff",
      position: 'absolute',
      top: "50%"
    },
    header:{
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tit:{
      color: '#1ED616',
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
    }, 
    contenteTheFato: {
      marginTop: 50,
      width: "100%",
      padding: 18, 
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
})

export default Profile;