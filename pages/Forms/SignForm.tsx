import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Button from "../../components/FormComponents/Button";
import Input from "../../components/FormComponents/Input";
import Link from "../../components/FormComponents/Link";
import { Ionicons } from '@expo/vector-icons'
import { NativeWindStyleSheet } from "nativewind";
import { signUp, authenticate  } from "../../api/user";
//import { AsyncStorage } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: "native",
});

type RegisterData = {
  
}

const SignForm = () => {
    const [loading, setIsLoading] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm({})

    async function handleSignIn(data: any) {
      const { username, email, password } = data;
      setIsLoading(true);

      await signUp({username, email, password, name: username, birthdate: '2000-01-01'});
      const auth = await authenticate({email, password});
      //localStorage['token'] = auth.access_token;

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  
    return(
      <View className="flex-1 justify-center items-center bg-[#f0f0f0] px-4">
        <Image className="w-60 h-60" source={{uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',}} />

        <Input 
          placeholder="Nome de Usuário" 
          iconName="account" 
          autFocus={true} 
          nameForm="username"
          secure={false} 
        />

        <Input 
          placeholder="Email" 
          iconName="email" 
          autFocus={false} 
          nameForm="email" 
          secure={false}
        />

        <Input 
          placeholder="Senha" 
          iconName="lock" 
          autFocus={false} 
          nameForm="password"
          secure={true}
        />
        
        <Button title="Cadastrar" isLoading={loading} onPress={handleSubmit(handleSignIn)} />

        <Link onPress={""}/>
      </View>
    );
}

export default SignForm;