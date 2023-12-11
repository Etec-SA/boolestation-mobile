import { View, Text } from 'react-native';
import { IStatement } from '../../types';
import React from 'react';

const Statement = (props: IStatement)=>{
    return(
        <>
            <View className="flex justify-center items-center text-center w-[100%] gap-y-6 p-5">
                <Text className="text-xl font-bold text-[#f0f0f0]">{props.title}</Text>
                <Text className="text-md font-semibold text-[#f0f0f0] text-center">{props.description}</Text>
            </View>
        </>
    );
}

export default Statement;