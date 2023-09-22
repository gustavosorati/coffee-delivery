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
  const cupOfCoffee = useSharedValue(0);
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

  const coffeeAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(cupOfCoffee.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(cupOfCoffee.value,
            [0, 1],
            [20, -20],
            Extrapolate.CLAMP
          ),
        }
      ]
    }
  });

  const logoAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(LogoAnimation.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(LogoAnimation.value,
            [0, 1],
            [200, 0],
            Extrapolate.EXTEND
          ),
        }
      ]
    }
  });

  useEffect(() => {
      backgroundAnimation.value = withTiming(1, { duration: 1000 }, () => {

        cupOfCoffee.value = withTiming(1, { duration: 1000, easing: Easing.ease }),

        LogoAnimation.value = withTiming(1, { duration: 1000, easing: Easing.ease }, () => {
          "worklet";
          runOnJS(navigateTo)()
        })
      });
  }, []);


    return (
      <Animated.View style={styles.container} >
        <Animated.View style={[animatedBackground, styles.circle]} />

        <View style={{ flexDirection: "row" }}>
          <Animated.View style={[coffeeAnimation, styles.logo]}>
            <Coffee width={42} />
          </Animated.View>

          <Animated.View style={[logoAnimated]}>
            <CoffeeDelivery width={90} />
          </Animated.View>
        </View>
      </Animated.View>
    )
}
