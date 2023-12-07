import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeWindStyleSheet } from "nativewind";
import { IconName } from "../../types";

NativeWindStyleSheet.setOutput({
  default: "native",
});

interface InputProps {
  placeholder: string;
  iconName: IconName;
  autFocus: boolean;
  nameForm: string;
  secure: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, iconName, autFocus, nameForm, secure }: InputProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({})

  return(
    <Controller control={control} name={nameForm} render={({ field: { onChange, onBlur, value } }) => (
      <View className="flex-row justify-between items-center shadow-md w-[95%] bg-[#fff] px-4 mb-6 rounded-md text-gray-600">
        <MaterialCommunityIcons className="h-12" name={iconName as any} color="gray" size={18} />
        <TextInput className="w-[100%] h-12 bg-[#fff] p-4 rounded-md text-gray-600 text-sm" onChangeText={onChange} onBlur={onBlur} value={value} autoFocus={autFocus} secureTextEntry={secure} placeholder={placeholder} />
      </View>
    )}
    />  
  )
}

export default Input;