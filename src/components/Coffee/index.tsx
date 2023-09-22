import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { styles } from "./styles";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { Tag } from "../Tag";
import { THEME } from "../../styles/THEME";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";
import { GetCoffeeBrand } from "../GetCoffeeBrand";
import { CoffeeBrand } from "../../dto/CoffeeDTO";

interface Props {
  index: number;
  card_size: number;
  space: number;
  scrollX: SharedValue<number>;
  product: {
    id: number;
    title: string;
    tag: string;
    image: string;
    description: string;
    value: number;
  }
}

export function Coffee({
  index,
  card_size,
  space,
  scrollX,
  product
}: Props) {
  const navigation = useNavigation<RouteParamsList>();

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

  const coffeeImage = product.image as CoffeeBrand;

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
      <Pressable
        onPress={() => navigation.navigate("product", {
          id: product.id,
          tag: product.tag,
          title: product.title,
          description: product.description,
          value: product.value
        })}
        style={{ flex: 1 }}
      >
        {GetCoffeeBrand({
          image: coffeeImage,
          style: {
            position: "relative",
            alignSelf: "center",
            marginTop: -40,
            width: 100,
            height: 100
          }
        })}

        <View
          style={{
            flex: 1,
            gap: 18,
            alignItems: "center",
            padding: 12
          }}
        >
          <Tag title={product.tag} />

          <View style={{ gap: 4, alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: THEME.colors.base["gray-200"]
              }}
            >{product.title}</Text>

            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: THEME.colors.base["gray-400"]
              }}
            >{product.description}</Text>
          </View>

          <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: THEME.colors.product["yellow-dark"]
              }}
          >R$
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: THEME.colors.product["yellow-dark"]
              }}
            > {product.value.toFixed(2)}</Text>
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  )
}
