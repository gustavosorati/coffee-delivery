import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.product["purple-dark"]
  },
  circle: {
    width: 0,
    height: 0,
    backgroundColor: THEME.colors.product["purple"],
    borderRadius: 999,
    position: "absolute"
  },
  logo: {
    opacity: 0,
    flexDirection: "row",
  }
})
