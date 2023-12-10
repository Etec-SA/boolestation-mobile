import { View, Text } from 'react-native';
import { IStatement } from '../../types';

const Statement = (props: IStatement)=>{
    return(
        <>
            <View className="flex justify-center items-center text-center w-[100%] gap-y-6 p-5">
                <Text className="text-xl font-bold text-black">{props.title}</Text>
                <Text className="text-md font-semibold text-black text-center">{props.description}</Text>
            </View>
        </>
    );
}

export default Statement;