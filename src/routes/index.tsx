import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../components/SplashScreen';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='splash'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
