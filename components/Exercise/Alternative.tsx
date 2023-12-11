import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { IAlternative } from "../../types";

const Alternative = ({ isDisabled, title, onPress, background, isCorrect }: IAlternative) => {
  const [backgroundColor, setBackgroundColor] = useState('#28282B');

  let buttonClass = `flex justify-center items-center shadow-md w-[95%] h-16 bg-[#28282B] p-4 rounded-md text-[#f0f0f0]`;

  return (
    <>
      <View className="flex justify-content items-center w-[100%] my-2">
        <TouchableOpacity
          className={buttonClass}
          onPress={() => {
              background = isCorrect ? "#1ED616" : "#c10000";
              setBackgroundColor(background);
              onPress();
            }
          }
          style={{backgroundColor: backgroundColor}}
          disabled={ isDisabled }
        >
          <Text className="text-[#f0f0f0] text-md text-center">{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Alternative;
