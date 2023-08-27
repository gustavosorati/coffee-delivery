import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";


export const styles = StyleSheet.create({
  container: {
    height: 200,
    borderTopLeftRadius: 4.8,
    borderTopRightRadius: 29,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 4.8,
    borderColor: THEME.colors.base["gray-700"],
    backgroundColor: THEME.colors.base["gray-800"],
    borderWidth: 2,
  }
})
