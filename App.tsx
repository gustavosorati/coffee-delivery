import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';``

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  );
}

