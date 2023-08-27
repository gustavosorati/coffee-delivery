import { StyleSheet } from "react-native"
import { THEME } from "../../styles/THEME"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.base["gray-200"],
    borderRadius: 4,
    paddingHorizontal: 8,
    gap: 8
  }
})
