import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { StatusBar } from 'react-native';
import { Routes } from './src/routes';import { CartProvider } from "./src/contexts/CartContext";
import { ToastProvider } from "./src/contexts/ToastContext";
``

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
          <Routes />
          <StatusBar barStyle="light-content" />
      </CartProvider>
    </GestureHandlerRootView>

  );
}

