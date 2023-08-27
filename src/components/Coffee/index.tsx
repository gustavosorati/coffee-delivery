import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { styles } from "./styles";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Tag } from "../Tag";
import { THEME } from "../../styles/THEME";

interface Props {
  index: number;
  card_size: number;
  space: number;
  scrollX: SharedValue<number>;
  // imageRef: ImageSourcePropType;
}

export function Coffee({
  index,
  card_size,
  space,
  scrollX,
}: Props) {
  const range = [
    (index - 1) * card_size,
    (index) * card_size,
    (index + 1) * card_size
  ];

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value,
      range,
      [.7, 1, .7],
      Extrapolate.CLAMP
    );

    return { transform: [{ scale: scale }] }
  }, [scrollX.value]);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        {
          width: card_size,
        },
      ]}
    >
      <Image
        source={require("../../assets/images/expresso.png")}
        style={{
          position: "relative",
          alignSelf: "center",
          marginTop: -20,
          width: 64,
          height: 64
        }}
      />

      <View
        style={{
          flex: 1,
          gap: 8,
          alignItems: "center",
          padding: 12
        }}
      >
        <Tag />

        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: THEME.colors.base["gray-200"]
          }}
        >Irlandês</Text>

        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            color: THEME.colors.base["gray-400"]
          }}
        >Bebida a base de café, uísque irlandês, açúcar e chantilly</Text>
      </View>
    </Animated.View>
  )
}
