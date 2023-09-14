import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ArrowRightSvg from "../../assets/icons/arrow-right.svg";
import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";
import { THEME } from "../../styles/THEME";
import { useCart } from "../../contexts/CartContext";
import Animated, { SlideInDown, SlideInUp, SlideOutDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";

interface Props {
  product: {
    id: number;
    title: string;
    description: string;
    value: number;
  }
  size: string;
  amount: number;
}

export function ProductToast({
  product,
  amount,
  size
}: Props) {
  const { products } = useCart();
  const navigation = useNavigation<RouteParamsList>();

  return (
    <Animated.View
      entering={SlideInDown.duration(700)}
      exiting={SlideOutDown.duration(700)}
      style={[
        {
          gap: 12,
          padding: 32,
          flexDirection: "row",
          backgroundColor: THEME.colors.base.white,
          position: "absolute",
          bottom: 0
        },
        styles.shadow
      ]}
    >
      <View
        style={{
          backgroundColor: THEME.colors.base["gray-500"],
          padding: 9,
          borderRadius: 6
        }}
      >
        <ShoppingCartSvg
          width={16}
          height={16}
          fill={THEME.colors.base.white}
        />

        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 99,
            backgroundColor: THEME.colors.product.purple,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -6,
            right: -6,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: THEME.colors.base.white,
            }}
          >{products.length}</Text>
        </View>
      </View>

      <Text
        style={{
          flex: 1,
          fontSize: 14,
          color: THEME.colors.base["gray-400"]
        }}
      >{amount} {product.title} de {size} adicionado ao carrinho</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("cart")}
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4 }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "800",
            textTransform: "uppercase",
            color: THEME.colors.product["purple-dark"]
          }}
        >Ver</Text>

        <ArrowRightSvg
          width={16}
          height={16}
          fill={THEME.colors.product.purple}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 20 },
    elevation: 10
  }
})
