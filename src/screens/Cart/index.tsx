import { Alert, Image, TouchableOpacity, SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { useCart } from "../../contexts/CartContext";

import { RouteParamsList } from "../../routes";

import ArrowSvg from "../../assets/icons/arrow-left.svg";
import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";

import { Button } from "../../components/Button";
import { SwipeableCoffeeCard } from "../../components/SwipeableCoffeeCard";

import { THEME } from "../../styles/THEME";

export function Cart() {
  const { products, total } = useCart();
  const navigation = useNavigation<RouteParamsList>();

  const handleGoBack = () => navigation.goBack();

  return (
    <>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base.white }} />
      <SafeAreaView
        style={{
          flex:1,
          backgroundColor: THEME.colors.base.white
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleGoBack}
            style={styles.return}
          >
            <ArrowSvg
              width={24}
              height={24}
              fill={THEME.colors.base["gray-100"]}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Carrinho
          </Text>
        </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1
            }}
          >
            {products.length === 0 &&
              <View
                style={{
                  flex: 1,
                  gap: 16,
                  alignItems: "center",
                  paddingVertical: 64
                }}
              >
                <ShoppingCartSvg
                  width={24}
                  height={24}
                  fill={THEME.colors.base["gray-500"]}
                />

                <Text>Seu carrinho está vazio</Text>

                <View style={{ width: "100%", paddingHorizontal: 32 }}>
                  <Button
                    text="ver catálogo"
                    onPress={() => navigation.navigate("home")}
                  />
                </View>
              </View>
            }

            {products.map(product => {
              return product.items.map((item, index) => (
                <SwipeableCoffeeCard
                  key={product.id + index}
                  product={{
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    value: product.value,
                    size: item.size,
                    amount: item.amount
                  }}
                />
              ))
            })}
          </ScrollView>

          {/* Footer */}
          <View
            style={[
              styles.footer,
              styles.shadow
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: THEME.colors.base["gray-200"],
                }}
              >Valor total</Text>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: THEME.colors.base["gray-200"],
                }}
              >R$ {total.toFixed(2)}</Text>
            </View>

            <Button
              variant="secondary"
              text="Confirmar Pedido"
            />
          </View>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-900"]}} />
    </>
  )
}
