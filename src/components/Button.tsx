import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { THEME } from "../styles/THEME";

type Props = PressableProps & {
  text: string;
  variant?: "primary" | "secondary";
}

export function Button({ text, variant = "primary", ...rest}: Props) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.container,
        {
          backgroundColor: variant === "primary"
            ? isPressed
              ? THEME.colors.product.purple
              : THEME.colors.product["purple-dark"]
            : !isPressed
              ? THEME.colors.product["yellow-dark"]
              : THEME.colors.product.yellow
          ,
        },
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: isPressed
              ? THEME.colors.base.white
              : THEME.colors.base.white,
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
    // flex: 1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  }
})
