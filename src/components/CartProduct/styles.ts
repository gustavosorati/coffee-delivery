import { StyleSheet } from "react-native";
import { THEME } from "../../styles/THEME";


export const styles = StyleSheet.create({
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 99,
    backgroundColor: THEME.colors.product.purple,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -15,
    right: -15,
  },
  indicatorText: {
    fontSize: 12,
    fontWeight: "400",
    color: THEME.colors.base.white,
  }
})
