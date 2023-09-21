import { useCallback, useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Audio } from 'expo-av';

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { useCart } from "../../contexts/CartContext";
import { useToast } from "../../contexts/ToastContext";

import { RouteParamsList } from "../../routes";

import ArrowSvg from "../../assets/icons/arrow-left.svg";

import { Tag } from "../../components/Tag";
import { Smoke } from "../../components/Smoke";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CartProduct } from "../../components/CartProduct";
import { ButtonMinus } from "../../components/ButtonMinus";

import { THEME } from "../../styles/THEME";
import { styles } from "./styles";


interface RouteParams {
  id: number;
  title: string;
  description: string;
  value: number;
}

export function Product() {
  const routes = useRoute();
  const { clearToast } = useToast();
  const params = routes.params as RouteParams;

  const navigation = useNavigation<RouteParamsList>();
  const { addToast } = useToast();
  const { addProduct } = useCart();

  const [sound, setSound] = useState<Audio.Sound>();

  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);

  const handleGoBack = () => navigation.goBack();

  const handleIncrementAmount = () => setAmount(amount + 1);

  const handleDecrementAmount = () => {
    if(amount > 1) {
      setAmount(amount - 1);
    }
  }

  const handleAddCoffee = async () => {
    if(!selectedSize) {
      setError(true);

      const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/error.mp3'));

      setSound(sound);

      await sound.playAsync().finally(() => {
        Alert.alert(
          "Selecione o tamanho",
          "Por favor selecione o tamanho da sua xícara"
        );
      })

      return;
    }
    setError(false);

    const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/cash-register.mp3'));

    setSound(sound);
    await sound.playAsync();

    addProduct(
      params.id,
      params.title,
      params.description,
      params.value,
      amount,
      selectedSize
    );

    addToast({
      id: params.id,
      title: params.title,
      description: params.description,
      value: params.value,
      size: selectedSize,
      amount
    });

    navigation.navigate("home");
  }

  useEffect(() => {
    if(selectedSize) setError(false)
  }, [selectedSize])

  useFocusEffect(
    useCallback(() => {
      clearToast();
    }, [])
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-100"]}} />
      <SafeAreaView
        style={{
          flex:1,
          backgroundColor: THEME.colors.base["gray-100"]
        }}
      >
          <ScrollView
            contentContainerStyle={{
              flex: 1,
            }}
          >
            {/* Header */}
            <View style={styles.header}>
              {/* Menu */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 32
                }}
              >
                {/* Go Back */}
                <TouchableOpacity onPress={handleGoBack}>
                  <ArrowSvg
                    width={24}
                    height={24}
                    fill={THEME.colors.base["gray-900"]}
                  />
                </TouchableOpacity>

                {/* Items */}
                <CartProduct />
              </View>

              {/* Product Details */}
              <View>
                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                  <Tag title="teste" variant="secondary" />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 24,
                      fontWeight: "700",
                      color: THEME.colors.base["gray-900"]
                    }}
                  >{params.title}</Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: THEME.colors.product["yellow"]
                    }}
                  >R$ <Text
                        style={{
                          fontSize: 36,
                          fontWeight: "700",
                          color: THEME.colors.product["yellow"]
                        }}
                    > 9,90</Text>
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: THEME.colors.base["gray-900"]
                  }}
                >
                  Bebida a base de café, uísque irlandês, açúcar e chantilly
                </Text>
              </View>


             <View
                style={{
                  position: "absolute",
                  bottom: -60,
                  alignSelf: "center"
                }}
              >
              <Smoke />

              <Image
                source={require("../../assets/images/cup.png")}
                width={295}
                height={260}

                />
             </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              {/* cup size */}
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: error
                      ? THEME.colors.feedback["red-dark"]
                      : THEME.colors.base["gray-400"],
                    marginBottom: 8
                  }}
                >
                  Selecione o tamanho:
                </Text>

                <View style={{ flexDirection: "row", gap: 12 }}>
                  <Select
                    text="114ml"
                    selected={selectedSize === "114"}
                    onPress={() => setSelectedSize("114")}
                    error={error}
                  />

                  <Select
                    text="140ml"
                    selected={selectedSize === "140"}
                    onPress={() => setSelectedSize("140")}
                    error={error}
                  />

                  <Select
                    text="227ml"
                    selected={selectedSize === "227"}
                    onPress={() => setSelectedSize("227")}
                    error={error}
                  />
                </View>
              </View>

              {/* Add */}
              <View
                style={{
                  gap: 12,
                  flexDirection: "row",
                  alignItems: 'center',
                  backgroundColor: THEME.colors.base["gray-700"],
                  borderRadius: 6,
                  padding: 12,
                }}
              >
                <ButtonMinus onPress={handleDecrementAmount}  />

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: THEME.colors.base["gray-100"],
                  }}
                >{amount}</Text>

                <ButtonAdd onPress={handleIncrementAmount} />

                <View style={{ flex: 1 }}>
                  <Button
                    text="Adicionar"
                    onPress={handleAddCoffee}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-900"]}} />
    </>
  )
}
