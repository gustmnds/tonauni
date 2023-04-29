import React from "react";
import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Text} from "react-native";
import S from "./styles";

export type InputTextProps = {
  value: string;
  label?: string;
  secure?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};


export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  label,
  placeholder,
  secure
}) => {

  const HandleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange && onChange(event.nativeEvent.text);
  };

  return (
    <View style={S.Container}>
      {label && (
        <Text style={S.Label}>
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        style={S.TextInput}
        onChange={HandleChange}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
      />
    </View>
  )
};
