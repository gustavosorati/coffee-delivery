import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { THEME } from "../../styles/THEME";

type Props = PressableProps & {
  text: string;
  selected: boolean;
  error: boolean;
}

export function Select({ text, selected, error, ...rest}: Props) {

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? THEME.colors.base["gray-900"]
            : THEME.colors.base["gray-700"],
          borderColor: error
            ? THEME.colors.feedback["red"]
            : selected
              ? THEME.colors.product["purple"]
              : THEME.colors.base["gray-700"],
          borderWidth: 2
        }
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected
              ? THEME.colors.product["purple"]
              : THEME.colors.base["gray-300"],
            fontWeight: selected
              ? "700"
              : "400",
          }
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  text: {
    fontSize: 14
  }
})
