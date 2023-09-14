import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SplashScreen } from '../components/SplashScreen';
import { Home } from '../screens/Home';
import { Product } from '../screens/Product';
import { Cart } from '../screens/Cart';
import { ToastProvider } from '../contexts/ToastContext';

type RouteParams = {
  splash: undefined;
  home: undefined;
  product: {
    id: number;
    title: string;
    description: string;
    value: number;
  }
  cart: undefined;
}

export type RouteParamsList = NativeStackNavigationProp<RouteParams>;

const Stack = createNativeStackNavigator<RouteParams>();

export function Routes() {
    return (
        <NavigationContainer>
          <ToastProvider>
            <Stack.Navigator
              initialRouteName='splash'
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="splash" component={SplashScreen} />

              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="product" component={Product} />
              <Stack.Screen name="cart" component={Cart} />
            </Stack.Navigator>
          </ToastProvider>
        </NavigationContainer>
    )
}
