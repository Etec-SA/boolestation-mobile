import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

type FormData = {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Insira seu nome"),
  password: yup.string().required("Insira sua senha")
})

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema)
    })

    const handleSignIn = (data: FormData) => console.log(data);
  
    return(
      <View className="flex-1 justify-center items-center bg-[#f0f0f0] px-4">
        <Image className="w-60 h-60" source={{uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',}} />

        <Controller control={control} name="username" render={({ field: { onChange, onBlur, value } }) => (
            <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 rounded-md text-gray-600" style={{borderWidth: errors.username && 2, borderColor: errors.username && '#d10d18'}} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Nome de Usuário" />
          )}
        />

        {errors.username && <Text className="w-[95%] text-[#d10d18] text-sm font-normal pt-2">{errors.username?.message}</Text>}

        <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
            <TextInput className="shadow-md w-[95%] h-12 bg-[#fff] p-4 mt-8 rounded-md text-gray-600" style={{borderWidth: errors.password && 2, borderColor: errors.password && '#d10d18'}} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Senha" secureTextEntry />
          )}
        />

        {errors.password && <Text className="w-[95%] pt-2 text-[#d10d18] text-sm font-normal">{errors.password?.message}</Text>}
        <Text className="text-gray-600 text-right underline text-sm w-[95%] pt-2">Esqueceu a senha?</Text>

        <TouchableOpacity className="w-[95%] h-12 bg-[#1ED616] justify-center items-center mt-4 rounded-md p-4 shadow-md" onPress={handleSubmit(handleSignIn)}>
            <Text className="text-[#f0f0f0] text-lg uppercase">Entrar!</Text>
        </TouchableOpacity>

        <Text className="text-gray-600 mt-8 text-sm">Não possui conta? Crie agora</Text>

      </View>
    );
}

export default LoginForm;