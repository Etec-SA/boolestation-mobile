import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { IAlternative } from "../types";

const Alternative = (props: IAlternative) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  function chooseAlternative(isCorrect = props.isCorrect) {
    if (isCorrect) {
      setBackgroundColor("green");
    } else {
      setBackgroundColor("red");
    }
  }

  return (
    <>
      <View className="flex justify-content items-center w-[100%] my-2">
        <TouchableOpacity
          className={`
            flex justify-center items-center w-[80vw] h-10 rounded-xl 
            shadow-inner border-2 border-b-4 border-slate-300
          `}
          style={{ backgroundColor }}
          onPress={() => chooseAlternative()}
        >
          <Text className="text-black text-md text-center">{props.title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Alternative;
