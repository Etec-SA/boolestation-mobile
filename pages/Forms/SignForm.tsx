import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signUp, authenticate } from "../../api/user";
import { NativeWindStyleSheet } from "nativewind";
import Button from "../../components/FormComponents/Button";
import Input from "../../components/FormComponents/Input";
import Link from "../../components/FormComponents/Link";
import cache from "../../cache";

NativeWindStyleSheet.setOutput({
  default: "native",
});

type RegisterData = {};

const SignForm = ({ changePage, redirectToMain }: { changePage: any, redirectToMain: any}) => {
  const [loading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  async function handleSignIn(data: any) {
    const { username, email, password } = data;
    setIsLoading(true);
    await signUp({
      username,
      email,
      password,
      name: username,
      birthdate: "2000-01-01",
    });

    const auth = await authenticate({ email, password });

    if(!auth){
      setIsLoading(false);
      alert('Algo de errado aconteceu ao registrar sua conta.');
      return;
    }

    cache.saveItem("token", auth.access_token);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    redirectToMain('Routes');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          className="w-60 h-60"
          source={{
            uri:
              "https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png",
          }}
        />

        <Controller control={control} name="username" render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mb-6 rounded-md text-gray-600">
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

        <Controller control={control} name="email" render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mb-6 rounded-md text-gray-600">
            <MaterialCommunityIcons className="h-12" name="email" color="gray" size={18} />
            <TextInput 
              className="w-[100%] h-12 bg-[#fff] p-4 rounded-md text-gray-600 text-sm" 
              onChangeText={onChange} 
              onBlur={onBlur} 
              value={value} 
              placeholder="Email" 
              autoCorrect={false}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        )}
        />

        <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
          <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mb-6 rounded-md text-gray-600">
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

        <Button
          title="Cadastrar"
          isLoading={loading}
          onPress={handleSubmit(handleSignIn)}
        />

        <Link
          onPress={() => {
            changePage("SignIn");
          }}
          title="Já possui uma conta?"
          titlePress="Entrar agora"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default SignForm;