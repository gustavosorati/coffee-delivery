import { Pressable, PressableProps } from "react-native";

import Minus from "../assets/icons/minus.svg";

import { useState } from "react";
import { THEME } from "../styles/THEME";

type Props = PressableProps;

export function ButtonMinus({ ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: isPressed
          ? THEME.colors.base["gray-700"]
          : "transparent"
      }}
      {...rest}
    >
      <Minus
        width={20}
        height={20}
        fill={isPressed
          ? THEME.colors.product["purple-dark"]
          : THEME.colors.product.purple
        }
      />
    </Pressable>
  )
}
