import MenuRow from '../components/MenuRow';
import { Text, View } from 'react-native';
import { MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { BiTrophy } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { ReactNode } from 'react';
import { icons } from 'react-icons';

const ProfileMenu = ()=>{
    const size = 30;
    const color = "white";

    const menuRows: Array<{icon: ReactNode, label: string}> = [
        {icon: <AiOutlineUser size={size} color={color}/>, label: "Perfil"},
        {icon: <RiMedalLine size={size} color={color}/>, label: "Ranking"},
        {icon: <BiTrophy size={size} color={color}/>, label: "Conquistas"},
        {icon: <LuSettings size={size} color={color}/>, label: "Configurações"},
    ];

    return(
        <>
            <View className="flex w-full h-screen bg-[#141415]">
                <View className="header flex w-full h-[10vh] p-4" id="closeIcon">
                    <MdClose size={30} color="white"/>
                </View>
                <View className="flex w-full h-[30vh] justify-center items-center flex-col" id="userPhoto">
                    <View className="w-[150px] h-[150px] bg-white rounded-full">
                    </View>
                    <Text className="text-white text-lg my-6">Gabriel Gamon</Text>
                </View>
                <View className="w-full h-[10vh]"></View>
                <View className="flex flex-col items-center w-full h-[50vh]">
                    {
                        menuRows.map(item=>{
                            return (<MenuRow icon={item.icon} label={item.label}/>)
                        })
                    }
                </View>
            </View>
        </>
    )
}

export default ProfileMenu;