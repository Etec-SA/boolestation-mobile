import RenderHtml from 'react-native-render-html';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';


const Theory = ({source, changePage}: {source: { html: string }, changePage: any})=>{
    return(
        <>
            <ScrollView>
            <View className="flex-row justify-between items-center w-full h-56 mb-4">                    
                <TouchableOpacity className="flex-row justify-center" onPress={()=>{changePage('Exercises')}}>
                    <MaterialCommunityIcons name="chevron-left" color="gray" size={30} />
                    <Text className="ml-2 text-gray-500 text-lg font-semibold mb-2">Conteúdo de Apoio</Text>
                </TouchableOpacity>
            </View>
                <RenderHtml
                    contentWidth={1000}
                    source={source}
                />
            </ScrollView>
        </>
    );
}

export default Theory;