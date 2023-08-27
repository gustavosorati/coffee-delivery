import { Dimensions, FlatList, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, { Easing, Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { styles } from "./styles";
import { THEME } from "../../styles/THEME";
import { useEffect } from "react";
import { HomeHeader } from "../../components/HomeHeader";
import { Coffee } from "../../components/Coffee";

export function Home() {
  const slip = useSharedValue(0);
  const scrollX = useSharedValue(0);

  const data = [1, 2, 3, 4, 5, 6];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
      console.log(event.contentOffset.x)
    },
  });

  const CARD_SIZE = 167;
  const ITEM_SPACE = (Dimensions.get("window").width - CARD_SIZE) / 2;

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
  })

  useEffect(() => {
    slip.value = withDelay(1000, withTiming(1, { duration: 700 }))
  }, []);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: THEME.colors.base["gray-100"]}} />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: THEME.colors.base["gray-900"]
          }}
        >

          <HomeHeader />

          <Animated.View
            style={
              [
                {
                  flex: 1,
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
              data={data}
              keyExtractor={(item) => String(item)}
              renderItem={({item, index}) => (
                <Coffee
                  key={index}
                  index={index}
                  card_size={CARD_SIZE}
                  space={ITEM_SPACE}
                  scrollX={scrollX}
                />
              )}
              contentContainerStyle={{
                paddingTop: 40,
                paddingHorizontal: ITEM_SPACE,
              }}
              bounces={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToInterval={CARD_SIZE}
              onScroll={scrollHandler}
            />
          </Animated.View>
        </View>
    </SafeAreaView>
    </>
  )
}
