import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Motorbike from "../../assets/icons/motorbike.svg";

import { THEME } from "../../styles/THEME";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";


export function Success() {
  const navigation = useNavigation<RouteParamsList>();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-500"] }} />

      <Animated.View
        entering={SlideInLeft.duration(1000)}
        exiting={SlideOutRight.duration(1000)}
        style={{ marginBottom: 16 }}
      >
        <Motorbike />
      </Animated.View>

      <Text style={styles.title}>Uhu! Pedido confirmado.</Text>
      <Text style={styles.message}>Agora é só aguardar que logo o café chegará até você!</Text>

      <View style={{ width: "100%", marginTop: 32 }}>
        <Button
          text="Ir para Home"
          onPress={() => navigation.navigate("home")}
        />
      </View>

    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: THEME.colors.product["yellow-dark"],
    marginBottom: 12
  },
  message: {
    fontSize: 14,
    fontWeight: "400",
    color: THEME.colors.base["gray-200"]
  }
})
