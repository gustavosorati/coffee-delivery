import { Canvas, Path } from "@shopify/react-native-skia";
import { View,} from "react-native";
import { styles } from "./styles";
import { useEffect, useRef, useState } from "react";
import { SMOKE } from "./data";
import { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export function Smoke() {
  const x = useSharedValue(1);

  const [ pathIndex, setPathIndex ] = useState(x.value);

  useEffect(() => {
    const interval = setInterval(() => {
      setPathIndex((prevPathIndex) => (prevPathIndex + 1) % SMOKE.length);
    }, 270);

    return () => clearInterval(interval)
  }, []);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {SMOKE[pathIndex].map((smoke, index) => (
          <Path
            key={index}
            path={smoke}
            opacity={0.2}
            color="#D7D5D5"
          />
        ))}

      </Canvas>
    </View>
  )
}
