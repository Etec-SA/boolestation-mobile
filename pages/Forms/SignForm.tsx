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
        <View style={styles.container}>

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Username"
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
            />
          )}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.spanText}>Já possui uma conta? Entrar agora</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141415',
        paddingHorizontal: 18
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#28282B',
        padding: 14,
        marginTop: 30,
        borderRadius: 8,
        color: '#F0F0F0',
        shadowColor: "#28282B", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
    },
    button:{
        width: '95%',
        height: 40,
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
    buttonText:{
        color: '#f0f0f0',
        fontSize: 16,
        textTransform: "uppercase"
    },
    labelError:{
        alignSelf: "flex-start",
        color: '#ff375b',
        marginBottom: 8
    },
    spanText:{
      marginTop: 20,
      color: '#f0f0f0',
      fontSize: 14
    },
    passForget:{
      color: '#f0f0f0',
      textAlign: "right",
      width: '95%',
      paddingTop: 8,
      textDecorationLine: 'underline',
      fontSize: 14
    }
})

export default SignForm;