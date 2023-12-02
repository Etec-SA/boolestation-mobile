import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useForm, Controller } from "react-hook-form";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const EditProfile = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({})

  function handleSignIn() {  //data
      console.log();  //data
  }

  return(
    <View className="flex-1 justify-start items-center bg-[#f0f0f0] p-4">
      <View className="p-4 flex-row justify-between items-center w-full h-16">                    
        <Text className="text-[#28282B] text-lg">Editar Perfil</Text>
        <TouchableOpacity className="p-2">
          <Ionicons name='close' size={24} color={'#28282B'}></Ionicons>
        </TouchableOpacity>
      </View>      

      <View className="rounded-full shadow-md mt-8" style={styles.profile}></View>

      <Controller control={control} name="name" render={({ field: { onChange, onBlur, value } }) => (
        <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-8 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Nome Completo" />
      )}
      />

      <Controller control={control} name="username" render={({ field: { onChange, onBlur, value } }) => (
        <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-6 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Nome de Usuário" />
      )}
      />

      <Controller control={control} name="email" render={({ field: { onChange, onBlur, value } }) => (
        <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-6 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Email" />
      )}
      />    

      <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
        <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-6 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Senha" />
      )}
      />

      <TouchableOpacity className="w-[95%] h-12 bg-[#1ED616] justify-center items-center mt-8 rounded-md p-4 shadow-md" onPress={handleSubmit(handleSignIn)}>
        <Text className="text-[#f0f0f0] text-lg uppercase">Salvar</Text>
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  profile:{
    backgroundColor: '#fff',
    height: 150,
    width: 150,
  },
})

export default EditProfile;