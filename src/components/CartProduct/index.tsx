import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";
import { THEME } from "../../styles/THEME";
import { useCart } from "../../contexts/CartContext";
import { styles } from "./styles";

type Props = TouchableOpacityProps;

export function CartProduct({ ...rest }: Props) {
  const { products } = useCart();

	return (
    <TouchableOpacity {...rest}>
      <ShoppingCartSvg
        width={24}
        height={24}
        fill={products.length > 0
          ? THEME.colors.product.purple
          : THEME.colors.product["yellow-dark"]
        }
      />

      {products.length > 0 &&
        <View style={styles.indicator}>
          <Text style={styles.indicatorText}>{products.length}</Text>
       </View>
      }
    </TouchableOpacity>
	);
}
