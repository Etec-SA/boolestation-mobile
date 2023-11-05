import { View, Text } from 'react-native';
import { IStatement } from '../types';

const Statement = (props: IStatement)=>{
    return(
        <>
            <View className="flex justify-center items-center w-[100%] gap-6 p-5">
                <Text className="text-xl text-white">{props.title}</Text>
                <Text className="text-sm text-white text-center">{props.description}</Text>
            </View>
        </>
    );
}

export default Statement;