import { ReactNode } from "react";
import { View, Text } from "react-native";

interface MenuRowProps{
    label: string;
    icon?: ReactNode;
}

const MenuRow = (props: MenuRowProps)=>{
    const {icon, label} = props;

    return(
        <>
            <View className="flex flex-row items-center justify-left w-full p-6">
                {icon ? icon : ""}
                <Text className="text-white text-lg ml-10">
                    {label}
                </Text>
            </View>
        </>
    )
}

export default MenuRow;