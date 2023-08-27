import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { styles } from "./styles";
import { THEME } from "../../styles/THEME";
import { useEffect } from "react";

import MapSvg from "../../assets/icons/map-pin.svg";
import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";
import { Input } from "../Input";

export function HomeHeader() {
  const header = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => {
    return {
      height: interpolate(header.value,
        [0, 1],
        [0, 300],
        Extrapolate.CLAMP
      )
    }
  })

  useEffect(() => {
    header.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedHeader]}>
      {/* Geo */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <View style={styles.geo}>
          <MapSvg
            width={24}
            height={24}
            fill={THEME.colors.product["purple"]}
          />

          <Text style={styles.city}>Orlândia, SP</Text>
        </View>

        <TouchableOpacity>
          <ShoppingCartSvg
            width={24}
            height={24}
            fill={THEME.colors.product["yellow-dark"]}
          />
        </TouchableOpacity>
     </View>

    <View style={{ gap: 12 }}>
      <Text style={styles.BannerText}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <View>
        <Input />

        <View>
          <Image
            source={require("../../assets/images/coffee-beans.png")}
            style={{ position: "absolute", right: -20, }}
          />
        </View>
      </View>
    </View>


    </Animated.View>
  )
}
