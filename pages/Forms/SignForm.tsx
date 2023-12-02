import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const SignForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({})

    function handleSignIn() {  //data
        console.log();  //data
    }
  
    return(
      <View className="flex-1 justify-center items-center bg-[#f0f0f0] px-4">
        <Image className="w-60 h-60" source={{uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/VectorLogo.png',}} />

        <Controller control={control} name="username" render={({ field: { onChange, onBlur, value } }) => (
            <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Username" />
          )}
        />

        <Controller control={control} name="email" render={({ field: { onChange, onBlur, value } }) => (
            <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-8 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Email" />
          )}
        />

        <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
            <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-8 rounded-md text-gray-600" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Password" />
          )}
        />

        <TouchableOpacity className="w-[95%] h-12 bg-[#1ED616] justify-center items-center mt-8 rounded-md p-4 shadow-md" onPress={handleSubmit(handleSignIn)}>
            <Text className="text-[#f0f0f0] text-lg uppercase">Cadastrar</Text>
        </TouchableOpacity>

        <Text className="text-gray-600 mt-8 text-sm">Já possui uma conta? Entrar agora</Text>
      </View>
    );
}

export default SignForm;