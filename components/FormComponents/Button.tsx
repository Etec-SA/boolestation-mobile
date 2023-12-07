import React from "react";
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

interface ButtonProps {
    title: string;
    isLoading?: boolean;
    onPress: () => void;
    disabled?: boolean;
  }

const Button: React.FC<ButtonProps> = ({ title, isLoading, onPress, disabled }: ButtonProps) => {
    return(
        <TouchableOpacity 
            className="w-[95%] h-12 bg-[#1ED616] justify-center items-center mt-4 rounded-md shadow-md" 
            onPress={onPress} 
            disabled={isLoading}>
                {isLoading ? (
                    <ActivityIndicator color="#f0f0f0" />
                ) : (
                    <Text className="text-[#f0f0f0] text-lg uppercase">{title}</Text>
                )}
        </TouchableOpacity>    
    )
}

export default Button;