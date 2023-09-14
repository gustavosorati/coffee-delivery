import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderBottomWidth: 2,
    borderBottomColor: THEME.colors.base["gray-700"],
    backgroundColor: THEME.colors.base.white,
  },
  backContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 32,
    height: "100%",
    backgroundColor: THEME.colors.feedback["red-light"]
  }
})
