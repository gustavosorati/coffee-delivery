import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { THEME } from "../styles/THEME";
import { useState } from "react";

type Props = PressableProps & {
  text: string;
  isSelected: boolean;
}

export function SectionTag({ text, isSelected, ...rest}: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ?
            THEME.colors.product["purple"]
            : isPressed
              ? THEME.colors.product["purple"]
              : THEME.colors.base["gray-900"],
          borderColor: isSelected ?
            THEME.colors.product["purple"]
            : isPressed
              ? THEME.colors.product["purple"]
              : THEME.colors.product["purple"],
          borderWidth: 1
        }
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: isSelected
              ? THEME.colors.base.white
              : isPressed
                ? THEME.colors.base.white
                : THEME.colors.product["purple-dark"],
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 10
  }
})
