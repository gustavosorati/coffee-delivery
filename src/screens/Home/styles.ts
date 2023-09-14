import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: THEME.colors.base["gray-100"]
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.colors.base["gray-300"],
    marginBottom: 16
  }
})
