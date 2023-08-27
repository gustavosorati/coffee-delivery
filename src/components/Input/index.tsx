import { TextInput, View } from "react-native";
import { THEME } from "../../styles/THEME";

import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import { styles } from "./styles";

export function Input() {
  return (
    <View style={styles.container}>
      <MagnifyingGlass
        width={20}
        height={20}
        fill={THEME.colors.base["gray-400"]}
      />

      <TextInput
        style={{
          flex: 1,
          height: 42,
          borderRadius: 4,
        }}
      />
        </View>
  )
}
