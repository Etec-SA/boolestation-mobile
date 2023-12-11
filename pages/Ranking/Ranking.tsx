import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlacingR from "../../components/PlacingRanking/PlacingR";
import { Ionicons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Ranking = () => {
    return(
            <View className="flex-1 justify-start items-center bg-[#141415] px-4">
                <View style={styles.header}>
                    <Text className="text-xl mb-2 font-bold text-[#fff]">Ranking Geral</Text>
                    <Text className="text-[#f0f0f0] text-left font-medium">Bem-vindo ao nosso ranking! Estamos entusiasmados por você se juntar à nossa comunidade.</Text>
                </View>

                <PlacingR />
                
                <View className="bg-[#28282B] flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
                    <View className="w-1/10 p-2">
                        <Text className="text-[#C0C0C0] font-bold text-lg">2</Text>
                    </View>
                    <View className="w-3/5 p-2">
                        <Text className="text-[#C0C0C0] font-bold text-lg">Luca Poe</Text>
                    </View>
                    <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                        <Ionicons name='trophy' size={30} color={'#C0C0C0'} />
                        <Text className="text-[#C0C0C0] font-bold text-lg">500</Text>
                    </View>
                </View>

                <View className="bg-[#28282B] flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
                    <View className="w-1/10 p-2">
                        <Text className="text-[#CD7F32] font-bold text-lg">3</Text>
                    </View>
                    <View className="w-3/5 p-2">
                        <Text className="text-[#CD7F32] font-bold text-lg">Eduardo Yasui</Text>
                    </View>
                    <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                        <Ionicons name='trophy' size={30} color={'#CD7F32'} />
                        <Text className="text-[#CD7F32] font-bold text-lg">400</Text>
                    </View>
                </View>

                <View className="bg-[#28282B] flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
                    <View className="w-1/10 p-2">
                        <Text className="text-gray-500 font-bold text-lg">4</Text>
                    </View>
                    <View className="w-3/5 p-2">
                        <Text className="text-[#f0f0f0] font-bold text-lg">Gabriel Gamon</Text>
                    </View>
                    <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                        <Ionicons name='trophy' size={30} color={'gray'} />
                        <Text className="text-[#f0f0f0] font-bold text-lg">300</Text>
                    </View>
                </View>

                <View className="bg-[#28282B] flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
                    <View className="w-1/10 p-2">
                        <Text className="text-[#f0f0f0] font-bold text-lg">5</Text>
                    </View>
                    <View className="w-3/5 p-2">
                        <Text className="text-[#f0f0f0] font-bold text-lg">Pedro Vitor</Text>
                    </View>
                    <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                        <Ionicons name='trophy' size={30} color={'gray'} />
                        <Text className="text-[#f0f0f0] font-bold text-lg">290</Text>
                    </View>
                </View> 

                <View className="bg-[#28282B] flex justify-between items-center flex-row w-full h-16 mt-5 rounded-2xl px-4 shadow-md">
                    <View className="w-1/10 p-2">
                        <Text className="text-[#f0f0f0] font-bold text-lg">6</Text>
                    </View>
                    <View className="w-3/5 p-2">
                        <Text className="text-[#f0f0f0] font-bold text-lg">Kayk Santos</Text>
                    </View>
                    <View className="w-1/4 flex justify-center items-center flex-row gap-2 p-2">
                        <Ionicons name='trophy' size={30} color={'gray'} />
                        <Text className="text-[#f0f0f0] font-bold text-lg">100</Text>
                    </View>
                </View>                                
            </View>
    );
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 120,
        width: '100%'
    },
})

export default Ranking;