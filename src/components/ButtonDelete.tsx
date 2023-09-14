import { Pressable, PressableProps } from "react-native";

import TrashSvg from "../assets/icons/trash.svg";

import { useState } from "react";
import { THEME } from "../styles/THEME";

type Props = PressableProps;

export function ButtonDelete({ ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        width: 37,
        height: 37,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: isPressed
          ? THEME.colors.base["gray-700"]
          : THEME.colors.base["gray-600"],
        backgroundColor: isPressed
          ? THEME.colors.base["gray-700"]
          : THEME.colors.base["gray-600"]
      }}
      {...rest}
    >
      <TrashSvg
        width={20}
        height={20}
        fill={isPressed ? THEME.colors.product.purple : THEME.colors.product["purple-dark"]}
      />
    </Pressable>
  )
}
