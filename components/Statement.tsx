import { View, Text } from 'react-native';
import { IStatement } from '../types';

const Statement = (props: IStatement)=>{
    return(
        <>
            <View className="flex justify-center items-center w-[100%] gap-4 p-5">
                <Text className="text-xl font-bold text-[#f0f0f0]">{props.title}</Text>
                <Text className="text-lg font-semibold text-[#f0f0f0] text-center">{props.description}</Text>
            </View>
        </>
    );
}

export default Statement;