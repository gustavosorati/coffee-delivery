import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../styles/THEME";

interface Props {
  title: string;
  variant?: "primary" | "secondary";
}

export function Tag({ title, variant = "primary" }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: variant === "primary"
            ? THEME.colors.product["purple-light"]
            : THEME.colors.base["gray-200"]
          ,
        }
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: variant === "primary"
            ? THEME.colors.product["purple-dark"]
            : THEME.colors.base["gray-900"]
          }
        ]}
      >
        {title}
      </Text>
    </View>
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
