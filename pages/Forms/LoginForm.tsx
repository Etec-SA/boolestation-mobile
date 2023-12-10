import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import { NativeWindStyleSheet } from "nativewind";
import Link from "../../components/FormComponents/Link";
import Button from '../../components/FormComponents/Button';

NativeWindStyleSheet.setOutput({
  default: "native",
});

type FormData = {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("O campo nome deve ser preenchido"),
  password: yup.string().required("O campo senha deve ser preenchido")
})

const LoginForm = ({changePage}: {changePage: any}) => {
  const [loading, setIsLoading] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema)
    })

    const handleSignIn = (data: FormData) => {
      setIsLoading(true);
      alert(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

    }
  
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image className="w-60 h-60" source={{uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',}} />

          <Controller control={control} name="username" render={({ field: { onChange, onBlur, value } }) => (
            <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mt-4 rounded-md text-gray-600">
              <MaterialCommunityIcons className="h-12" name="account" color="gray" size={18} />
              <TextInput 
                className="w-[100%] h-12 bg-[#fff] p-4 rounded-md text-gray-600 text-sm" 
                onChangeText={onChange} 
                onBlur={onBlur} 
                value={value} 
                placeholder="Nome de Usuário" 
                autoCorrect={false}
                keyboardType="default"
                autoCapitalize="none"
              />
            </View>
          )}
          />

          {errors.username && <Text className="w-[95%] text-[#d10d18] text-sm font-normal pt-2">{errors.username?.message}</Text>}

          <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
            <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mt-8 rounded-md text-gray-600">
              <MaterialCommunityIcons className="h-12" name="lock" color="gray" size={18} />
              <TextInput 
                className="w-[100%] h-12 bg-[#fff] p-4 rounded-md text-gray-600 text-sm" 
                onChangeText={onChange} 
                onBlur={onBlur} 
                value={value} 
                placeholder="Senha" 
                autoCorrect={false}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
          )}
          />

          {errors.password && <Text className="w-[95%] pt-2 text-[#d10d18] text-sm font-normal">{errors.password?.message}</Text>}
          <Text className="text-gray-600 text-right underline text-sm w-[95%] pt-2">Esqueceu a senha?</Text>

          <Button 
            title="Entrar" 
            isLoading={loading} 
            onPress={handleSubmit(handleSignIn)} 
          />

          <Link 
            onPress={() => {
              changePage('SignUp')
            }}
            title="Não possui uma conta?"
            titlePress="Criar agora."
          />
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

export default LoginForm;