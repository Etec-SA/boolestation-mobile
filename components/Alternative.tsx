import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { IAlternative } from "../types";

const Alternative = ({ isDisabled, title, onPress, background }: IAlternative) => {
  let buttonClass = `flex justify-center items-center w-[80vw] h-10 rounded-xl 
  shadow-inner border-2 border-b-4 border-slate-300 `;

  return (
    <>
      <View className="flex justify-content items-center w-[100%] my-2">
        <TouchableOpacity
          className={buttonClass += isDisabled ? `!bg-slate-500` : `!bg-white`}
          onPress={() => {
              onPress();
            }
          }
          style={{backgroundColor: background}}
          disabled={ isDisabled }
        >
          <Text className="text-black text-md text-center">{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Alternative;
