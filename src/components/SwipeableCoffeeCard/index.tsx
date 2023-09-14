import { Image, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import TrashSvg from "../../assets/icons/trash.svg";
import { THEME } from "../../styles/THEME";
import { ButtonMinus } from "../ButtonMinus";
import { ButtonAdd } from "../ButtonAdd";
import { ButtonDelete } from "../ButtonDelete";
import { styles } from "./styles";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import Animated, { LightSpeedOutRight, SlideOutRight } from "react-native-reanimated";
import { size } from "@shopify/react-native-skia";

interface Props {
  product: {
    id: number;
    title: string;
    description: string;
    amount: number;
    value: number;
    size: string;
  }
}

export function SwipeableCoffeeCard({ product }: Props) {
  const { deleteProduct, addProduct } = useCart();

  const [amount, setAmount] = useState(product.amount);

  const handleDeleteCoffee = (productId: number, size: string) => deleteProduct(productId, size);

  return (
    <Animated.View
      exiting={LightSpeedOutRight}
    >
      <Swipeable
        onSwipeableOpen={(props) => handleDeleteCoffee(product.id, product.size)}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderLeftActions={() => (
          <View style={styles.backContainer}>
            <TrashSvg
              width={28}
              height={28}
              fill={THEME.colors.feedback["red-dark"]}
            />
          </View>
       )}
      >
      <View style={styles.container}>
        <Image
          width={64}
          height={64}
          source={require("../../assets/images/expresso.png")}
        />

        <View
          style={{
            flex: 1,
            gap: 8,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flex: 1, gap: 4 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: THEME.colors.base["gray-100"]
                }}
              >{product.title}</Text>

              <Text
                style={{
                  fontSize: 14,
                  color: THEME.colors.base["gray-400"]
                }}
              >{product.size} ml</Text>
            </View>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: THEME.colors.base["gray-100"]
              }}
            >R$ {product.value.toFixed(2)}</Text>
          </View>

          <View
            style={{
              gap: 8,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                gap: 6,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 6,
                borderWidth: 1,
                borderColor: THEME.colors.base["gray-600"]
              }}
            >
              <ButtonMinus
                onPress={() => {
                  if(amount > 1) {
                    setAmount(amount - 1);
                    addProduct(
                      product.id,
                      product.title,
                      product.description,
                      product.value,
                      amount - 1,
                      product.size
                    )
                  }
                }}

              />

              <Text
                style={{
                  fontSize: 16,
                  color: THEME.colors.base["gray-100"]
                }}
              >{amount}</Text>

              <ButtonAdd onPress={() => {
                  setAmount(amount + 1);
                  addProduct(
                    product.id,
                    product.title,
                    product.description,
                    product.value,
                    amount + 1,
                    product.size
                  )
                }}
              />
            </View>

            <ButtonDelete
              onPress={() => deleteProduct(product.id, product.size)}
            />
          </View>
        </View>
      </View>
    </Swipeable>
    </Animated.View>
  )
}
