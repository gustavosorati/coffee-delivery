import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";


export const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    backgroundColor: THEME.colors.base.white,
    borderBottomWidth: 2,
    borderBottomColor: THEME.colors.base["gray-700"]
  },
  return: {
    position: "absolute",
    top: 14,
    left: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.colors.base["gray-200"],
  },
  footer: {
    height: 160,
    gap: 20,
    padding: 32,
    backgroundColor: THEME.colors.base.white
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: .2,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 }
  }
})
