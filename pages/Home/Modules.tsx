import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ExBox from "../../components/ExBox/ExBox";
import { getModules } from "../../api/module";
import modulesMock from './fixtures/modules.json';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Modules = ({onClick}: {onClick: any}) => {
  const [modules, setModules] = useState(modulesMock);

  /**
   * API CALL
   */
  useEffect(() => {
    /**
    const fetchModules = async () => {
      try {
        const modulesData = await getModules();

        setModules(modulesMock);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchModules();
    */
  }, []);

  return (
    <View className="flex-1 justify-start items-center bg-[#f0f0f0] px-4">
      <View className="mt-8 flex justify-center items-center h-32 w-full">
        <Image
          className="w-40 h-40"
          source={{
            uri: 'https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/LogoVectorGray.png',
          }}
        />
      </View>

      <View className="w-full mt-2">
        <Text className="text-gray-500 text-lg font-semibold mb-2 ml-4">Módulos</Text>
        {modules.map((module) => (
          <ExBox 
            key={module['id']} 
            title={module['title']} 
            description={module['description']}
            onClick={()=>{
              onClick(module['id']);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Modules;
