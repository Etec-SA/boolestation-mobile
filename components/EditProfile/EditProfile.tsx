import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const EditProfile = () => {
    return(
        <View>
            <Text>Formulario de Edição</Text>
        </View>
    )
}

export default EditProfile;