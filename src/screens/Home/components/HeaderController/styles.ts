import { StyleSheet } from "react-native";
import { THEME } from "../../../../styles/THEME";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.base["gray-100"],
    height: 0,
    paddingHorizontal: 32,
    paddingTop: 16,
    overflow: "hidden",
    zIndex: 1
  },
  geo: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  city: {
    color: THEME.colors.base.white
  },
  BannerText: {
    color: THEME.colors.base.white,
    fontSize: 20,
    fontWeight: "700"
  }
})
