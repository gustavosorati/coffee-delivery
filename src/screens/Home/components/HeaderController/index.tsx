import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { Extrapolate, SharedValue, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";

import { CartProduct } from "../../../../components/CartProduct";

import MapSvg from "../../../../assets/icons/map-pin.svg";

import { RouteParamsList } from "../../../../routes";

import { THEME } from "../../../../styles/THEME";
import { styles } from "./styles";

interface Props {
  scrollY: SharedValue<number>;
}

export function HeaderController({ scrollY }: Props) {
  const navigation = useNavigation<RouteParamsList>();

  const header = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => {
    return {
      height: interpolate(header.value,
        [0, 1],
        [0, 60],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(scrollY.value,
        [242, 440],
        [THEME.colors.base["gray-100"], THEME.colors.base.white]
      ),
    }
  });

  const animatedHeaderText = useAnimatedStyle(() => {
    return {
      color: interpolateColor(scrollY.value,
        [242, 440],
        [THEME.colors.base.white, THEME.colors.base["gray-100"]]
      )
    }
  });

  const handleNavigateTo = () => navigation.navigate("cart")

  useEffect(() => {
    header.value = withTiming(1, { duration: 700 });
  }, []);

  return (
    <Animated.View style={[
      styles.container,
      animatedHeader
    ]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32
        }}
      >
        <View style={styles.geo}>
          <MapSvg
            width={24}
            height={24}
            fill={THEME.colors.product["purple"]}
          />
          <Animated.Text
            style={[
              styles.city,
              animatedHeaderText
            ]}
          >Orlândia, SP</Animated.Text>
        </View>

        <CartProduct onPress={handleNavigateTo} />
     </View>
    </Animated.View>
  )
}
