import { View } from "react-native";
import { IStatement, IAlternative } from '../types/';
import Statement from "../components/Statement";
import Alternative from "../components/Alternative";

const Exercise = (props: {statement: IStatement, alternatives: IAlternative[]})=>{
    const { statement, alternatives } = props;
   
    return(
        <View className="flex flex-col justify-center items-center w-full h-screen gap-6">
            <Statement {...statement}/>
            <View className="flex w-full flex-col">
                {alternatives.map((alternative, idx)=>{
                    return <Alternative {...alternative} key={idx}/>
                })}
            </View>
        </View>
    )
}

export default Exercise;