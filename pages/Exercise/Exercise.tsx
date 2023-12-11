import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { IStatement, IAlternative } from '../../types';
import Statement from "../../components/Exercise/Statement";
import Alternative from "../../components/Exercise/Alternative";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import cache from "../../cache";
import { SafeAreaView } from "react-native-safe-area-context";

const Exercise = (props: {id: {exerciseId: string, lessonId: string}, statement: IStatement, alternatives: IAlternative[], changePage: any})=>{
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [backgrounds, setBackgrounds] = useState({
        correct: "#165724",
        wrong: "#942e30"
    });

    const { statement, alternatives, changePage } = props;

    return(
        <>
        <SafeAreaView className="flex-1 bg-[#141415] px-4">                  
                <TouchableOpacity className="flex flex-row my-8" onPress={()=>{
                    setBackgrounds({correct: '#e0dede', wrong: '#e0dede'});
                    changePage('Exercises');
                }}>
                    <MaterialCommunityIcons name="chevron-left" color="#f0f0f0" size={30} />
                    <Text className="ml-2 text-[#f0f0f0] text-lg font-semibold mb-2">Exercício</Text>
                </TouchableOpacity>

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
                                            let countType: 'wrongCount' | 'correctCount';

                                            if(!alternative.isCorrect){
                                                cache.deleteLessonStatus(props.id.lessonId, props.id.exerciseId);
                                                countType = 'wrongCount';
                                            }else{
                                                countType = 'correctCount';
                                                cache.insertLessonStatus(props.id.lessonId, props.id.exerciseId, true);
                                            }

                                            cache.increaseCount(props.id.exerciseId, countType);
                                            cache.setAttempt(props.id.exerciseId, countType != 'wrongCount');
                                        }catch(e){
                                            alert(JSON.stringify(e));
                                            console.log(e);
                                        }
                                        
                                        
                                    }
                                }
                            />
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    </>
    )
}

export default Exercise;