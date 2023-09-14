import { useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, SectionList, SectionListProps, StatusBar, Text, View } from "react-native";
import Animated, { Extrapolate, interpolate, interpolateColor, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";

import { RouteParamsList } from "../../routes";

import { OUR_COFFEES } from "../../utils/OUR_COFFEES";
import { OUR_COFFEES_BANNER } from "../../utils/OUR_COFFEES_BANNER";

import { Header } from "./components/Header";
import { Coffee } from "../../components/Coffee";
import { CoffeeBar } from "../../components/CoffeeBar";
import { SectionTag } from "../../components/SectionTag";
import { HeaderController } from "./components/HeaderController";

import { THEME } from "../../styles/THEME";
import { styles } from "./styles";

interface IProduct {
  id: number;
  title: string;
  description: string;
  value: number;
}

const CARD_SIZE = 208;
const ITEM_SPACE = (Dimensions.get("window").width - CARD_SIZE) / 2;

export function Home() {
  const slip = useSharedValue(0);
  const slipUp = useSharedValue(0);
  const scrollX = useSharedValue(0);
  const scrollY= useSharedValue(0);

  const navigation = useNavigation<RouteParamsList>();
  const sectionListRef = useRef<SectionList>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

  const AnimatedSafeArea = Animated.createAnimatedComponent(SafeAreaView);

  /* Functions */

  const handleScrollTo = async (index: number) => {
    sectionListRef.current.scrollToLocation({
      itemIndex: 0,
      sectionIndex: index,
    })
  }

  const handleRedirectTo = ({id, title, description, value}: IProduct) => {
    navigation.navigate("product", {
      id,
      title,
      description,
      value
    })
  }

  /* Animations */

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const scrollScreenHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedSlides = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(slip.value,
            [0, 1],
            [CARD_SIZE + ITEM_SPACE, 0],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  const animatedSection = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(slipUp.value,
            [0, 1],
            [300, 0],
            Extrapolate.CLAMP
          )
        }
      ],
      opacity: interpolate(slipUp.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  });

  const animatedOurCoffees = useAnimatedStyle(() => {
    return {
      display: scrollY.value > 472 ? "flex" : "none",
    }
  });

  const close = useAnimatedStyle(() => {
    return {
      display: scrollY.value > 472 ? "none" : "flex",
    }
  });

  const animatedHeader = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(scrollY.value,
        [242, 440],
        [THEME.colors.base["gray-100"], THEME.colors.base.white]
      ),
    }
  });

  useEffect(() => {
    slip.value = withDelay(1000, withTiming(1, { duration: 700 }));
    slipUp.value = withDelay(1000, withTiming(1, { duration: 700 }));
  }, []);

  return (
    <>
      <AnimatedSafeArea
        style={[
          animatedHeader,
          { backgroundColor: THEME.colors.base["gray-100"] }
        ]}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: THEME.colors.base["gray-100"]
        }}
      >
      <StatusBar
        barStyle={scrollY.value > 440
          ? "dark-content"
          : "light-content"
        }
      />

        <View style={{
          flex: 1,
          backgroundColor: THEME.colors.base["gray-900"]
        }}>

        {/* Elementos que precisam ser fixos */}
        <HeaderController scrollY={scrollY} />

        <Animated.View
          style={[
            animatedOurCoffees,
            {
              padding: 32,
              backgroundColor: THEME.colors.base.white
            }
          ]}
        >
          <Text style={styles.headerTitle}>Nossos cafés</Text>

            <View style={{ flexDirection: "row", gap: 8 }}>
              <SectionTag
                text="Tradicionais"
                isSelected={selectedCategory === "tradicionais"}
                onPress={() => handleScrollTo(0)}
              />
              <SectionTag
                text="Doces"
                isSelected={selectedCategory === "doces"}
                onPress={() => handleScrollTo(1)}
              />
              <SectionTag
                text="Especiais"
                isSelected={selectedCategory === "especiais"}
                onPress={() => handleScrollTo(2)}
              />
            </View>
        </Animated.View>

        {/* Section List Animada */}
        <AnimatedSectionList
          ref={sectionListRef}
          sections={OUR_COFFEES}
          onScroll={scrollScreenHandler}
          keyExtractor={(item, index) => String(item.id)}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: {title}}) => (
            <Animated.View style={[animatedSection, { paddingHorizontal: 32 }]}>
              <Text style={{
                fontSize: 14,
                fontWeight: "700",
                color: THEME.colors.base["gray-400"],
                textTransform: "capitalize",
              }}>{title}</Text>
            </Animated.View>
          )}
          ListHeaderComponent={() => (
            <>
              <Header />

              {/* Coffee FlatList */}
              <Animated.View
                style={
                  [
                    {
                      marginTop: -100,
                      zIndex: 2,
                      alignItems: "center",
                    },
                    animatedSlides
                  ]
                }
              >
                <Animated.FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={OUR_COFFEES_BANNER}
                  keyExtractor={(item) => String(item.id)}
                  contentContainerStyle={{
                    paddingTop: 40,
                    paddingHorizontal: ITEM_SPACE,
                  }}
                  renderItem={({item, index}) => (
                    <Coffee
                      key={index}
                      index={index}
                      card_size={CARD_SIZE}
                      space={ITEM_SPACE}
                      scrollX={scrollX}
                      product={item}
                    />
                  )}
                  bounces={false}
                  decelerationRate={0}
                  scrollEventThrottle={16}
                  snapToInterval={CARD_SIZE}
                  onScroll={scrollHandler}
                />
              </Animated.View>

              {/* Section List Header */}
              <Animated.View style={[animatedSection, close, { padding: 32 }]}>
                <Text style={styles.headerTitle}>Nossos cafés</Text>

                <View style={{ flexDirection: "row", gap: 8 }}>
                  <SectionTag
                    text="Tradicionais"
                    isSelected={selectedCategory === "tradicionais"}
                    onPress={() => handleScrollTo(0)}

                  />
                  <SectionTag
                    text="Doces"
                    isSelected={selectedCategory === "doces"}
                    onPress={() => handleScrollTo(1)}

                  />
                  <SectionTag
                    text="Especiais"
                    isSelected={selectedCategory === "especiais"}
                    onPress={() => handleScrollTo(2)}

                  />
                </View>
              </Animated.View>
             </>
           )}
           SectionSeparatorComponent={() => (
             <View style={{ paddingHorizontal: 24 , paddingVertical: 16 }} />
           )}
           renderItem={({item}) => (
             <Animated.View style={[animatedSection, { paddingHorizontal: 32 }]}>
               <CoffeeBar
                 title={item.title}
                 description={item.description}
                 value={item.value}
                 onPress={() => handleRedirectTo({
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  value: item.value
                 })}
               />
             </Animated.View>
           )}
           ItemSeparatorComponent={() => <View style={{ padding: 24 }} />}
           contentContainerStyle={{
             backgroundColor: THEME.colors.base["gray-900"]
           }}
         />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-900"] }} />
    </>
  )
}
