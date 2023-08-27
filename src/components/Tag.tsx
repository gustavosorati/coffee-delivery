import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../styles/THEME";

export function Tag() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expresso</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    backgroundColor: THEME.colors.product["purple-light"],
  },
  text: {
    color: THEME.colors.product["purple"],
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 8
  }
})
