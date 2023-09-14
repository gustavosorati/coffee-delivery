import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";


export const styles = StyleSheet.create({
  header: {
    // height: "80%",
    flex: 3,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: THEME.colors.base["gray-100"],
    zIndex: 10
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.colors.base["gray-300"],
    marginBottom: 16
  },
  footer: {
    flex: 1,
    gap: 26,
    paddingHorizontal: 32,
    paddingVertical: 48,
    backgroundColor: THEME.colors.base["gray-900"]
  },
})
