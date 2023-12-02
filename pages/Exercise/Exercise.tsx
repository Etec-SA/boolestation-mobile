import { View } from "react-native";
import { IStatement, IAlternative } from '../../types';
import Statement from "../../components/Exercise/Statement";
import Alternative from "../../components/Exercise/Alternative";
import { useState } from "react";

const Exercise = (props: {statement: IStatement, alternatives: IAlternative[]})=>{
    const [ isDisabled, setIsDisabled ] = useState(false);
    const { statement, alternatives } = props;

    return(
        <View className="flex flex-col justify-center items-center w-full h-screen gap-y-6">
            <Statement {...statement}/>
            <View className="flex w-full flex-col">
                {alternatives.map((alternative, idx)=>{
                    return (
                        <Alternative 
                            {...alternative} 
                            key={idx} 
                            isDisabled={isDisabled}
                            onPress={()=>{ 
                                    setIsDisabled(true);
                                    alternative.background = alternative.isCorrect ? "#165724" : "#942e30";
                                }
                            }
                        />
                    )
                })}
            </View>
        </View>
    )
}

export default Exercise;