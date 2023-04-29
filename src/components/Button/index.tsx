import React from "react";
import { Animated, Pressable, Text } from "react-native";
import S from "./styles";
import { fadeIn, fadeOut } from "@/@types/styles/animations";

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};


export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled
}) => {

  const animated = new Animated.Value(1);

  const HandleClick = () => {
    !disabled && onClick && onClick();
  }

  const HandlePressIn = () => {
    !disabled && fadeIn(animated);
  }

  const HandlePressOut = () => {
    !disabled && fadeOut(animated);
  }

  return (
    <Animated.View
      style={{
        width: "100%",
        opacity: disabled ? 0.5 : animated
      }}
    >
      <Pressable
        onPressIn={HandlePressIn}
        onPressOut={HandlePressOut}
        onPress={HandleClick}
        style={S.container}
      >
        <Text style={S.text}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};
