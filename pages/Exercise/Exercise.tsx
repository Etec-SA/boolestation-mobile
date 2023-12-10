import { TouchableOpacity, View, Text } from "react-native";
import { IStatement, IAlternative } from '../../types';
import Statement from "../../components/Exercise/Statement";
import Alternative from "../../components/Exercise/Alternative";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import cache from "../../cache";

const Exercise = (props: {id: {exerciseId: string, lessonId: string}, statement: IStatement, alternatives: IAlternative[], changePage: any})=>{
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [backgrounds, setBackgrounds] = useState({
        correct: "#165724",
        wrong: "#942e30"
    });

    const { statement, alternatives, changePage } = props;

    return(
        <>
            <View className="flex-row justify-between items-center w-full h-26 mb-4">                    
                <TouchableOpacity className="flex-row justify-center" onPress={()=>{
                    setBackgrounds({correct: '#e0dede', wrong: '#e0dede'});
                    changePage('Exercises');
                }}>
                    <MaterialCommunityIcons name="chevron-left" color="gray" size={30} />
                    <Text className="ml-2 text-gray-500 text-lg font-semibold mb-2">Exercício</Text>
                </TouchableOpacity>
            </View>

            <View className="flex flex-col justify-center items-center w-full gap-y-6">
                <Statement title={statement.title} description={statement.description}/>
                <View className="flex w-full flex-col">
                    {alternatives.map((alternative, idx)=>{
                        return (
                            <Alternative 
                                title={alternative.title}
                                isCorrect={alternative.isCorrect} 
                                key={idx} 
                                isDisabled={isDisabled}
                                onPress={async () => { 
                                        setIsDisabled(true);
                                        try{
                                            const countType = alternative.isCorrect ? 'correctCount' : 'wrongCount';
                                            cache.increaseCount(props.id.exerciseId, countType);
                                            cache.setAttempt(props.id.exerciseId, countType != 'wrongCount');
                                            //await cache.insertLessonStatus(props.id.lessonId, props.id.exerciseId, true);
                                        }catch(e){
                                            alert(JSON.stringify(e));
                                        }
                                        
                                        
                                    }
                                }
                            />
                        )
                    })}
                </View>
            </View>
        </>
    )
}

export default Exercise;