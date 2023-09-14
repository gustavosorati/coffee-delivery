import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { styles } from "./styles";
import { useEffect } from "react";

import MapSvg from "../../../../assets/icons/map-pin.svg";
import ShoppingCartSvg from "../../../../assets/icons/shopping-cart.svg";
import { Input } from "../../../../components/Input";
import { THEME } from "../../../../styles/THEME";
import { CartProduct } from "../../../../components/CartProduct";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";

export function Header() {
  const navigation = useNavigation<RouteParamsList>();

  const header = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => {
    return {
      height: interpolate(header.value,
        [0, 1],
        [0, 240],
        Extrapolate.CLAMP
      )
    }
  })

  const handleNavigateTo = () => navigation.navigate("cart")


  useEffect(() => {
    header.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedHeader]}>
      <View style={{ gap: 12 }}>
        <Text style={styles.BannerText}>
          Encontre o café perfeito para qualquer hora do dia
        </Text>

        <View>
          <Input />

          <View>
            <Image
              source={require("../../../../assets/images/coffee-beans.png")}
              style={{ position: "absolute", right: -20, }}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  )
}
