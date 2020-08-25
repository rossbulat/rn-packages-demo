import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { IButtonProps } from "./types";

export class Button extends React.Component<IButtonProps> {

  public render() {

    const {
      label,
      style,
      onPress,
      disabled,
      fontSize,
      textColor,
      borderColor,
      activeOpacity,
      backgroundColor,
    } = this.props;

    return (
      <View
        style={{
          ...styles.button,
          opacity: disabled ? 0.5 : 1,
          ...style,
        }}
      >
        <TouchableOpacity
          activeOpacity={activeOpacity !== undefined ? activeOpacity : 0.9}
          onPress={() => disabled !== true && onPress()}
          style={{
            ...styles.touchable,
            backgroundColor,
            borderColor,
          }}
        >
          <Text style={{
            color: textColor === undefined ? "#fff" : textColor,
            fontSize: fontSize === undefined ? 17 : fontSize,
            ...styles.buttonText,
          }}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;
