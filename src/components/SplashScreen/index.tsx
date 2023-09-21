import { Dimensions, View } from "react-native";
import { styles } from "./styles";
import Animated, { Easing, Extrapolate, Keyframe, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../../styles/THEME";
import { useEffect } from "react";

import Coffee from "../../assets/icons/coffee.svg";
import CoffeeDelivery from "../../assets/icons/coffee-delivery.svg";
import { RouteParamsList } from "../../routes";

const RADIUS_TOP = Dimensions.get("window").height;

export function SplashScreen() {
  const navigation = useNavigation<RouteParamsList>();

  const backgroundAnimation = useSharedValue(0);
  const glassAnimation = useSharedValue(0);
  const LogoAnimation = useSharedValue(0);

  const navigateTo = () => {
    setTimeout(() => {
      navigation.navigate("home")
    }, 1000)
  }

  const animatedBackground = useAnimatedStyle(() => {
    return {
      width: interpolate(backgroundAnimation.value,
        [0, 1],
        [0, RADIUS_TOP + 60],
        Extrapolate.CLAMP
      ),
      height: interpolate(backgroundAnimation.value,
        [0, 1],
        [0, RADIUS_TOP + 60],
        Extrapolate.CLAMP
      ),
    }
  });

  const x = useAnimatedStyle(() => {
    return {
      opacity: interpolate(glassAnimation.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(glassAnimation.value,
            [0, 1],
            [0, -20],
            Extrapolate.CLAMP
          ),
        }
      ]
    }
  });

  const z = useAnimatedStyle(() => {
    return {
      opacity: interpolate(LogoAnimation.value,
        [0.5, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(LogoAnimation.value,
            [0, 1],
            [60, 0],
            Extrapolate.EXTEND
          ),
        }
      ]
    }
  });

  useEffect(() => {
    withSequence(
      backgroundAnimation.value = withTiming(1, { duration: 1000 }, () => {
        LogoAnimation.value = withTiming(1, { duration: 700 }, () => {
          "worklet";
          runOnJS(navigateTo)()
        })
      }),
      glassAnimation.value = withTiming(1, { duration: 1000, easing: Easing.ease }))
  }, []);


    return (
      <Animated.View style={styles.container} >
        <Animated.View style={[animatedBackground, styles.circle]} />

        <View style={{ flexDirection: "row" }}>
          <Animated.View style={[x, styles.logo]}>
            <Coffee width={42} />
          </Animated.View>

          <Animated.View style={[z]}>
            <CoffeeDelivery width={90} />
          </Animated.View>
        </View>
      </Animated.View>
    )
}
