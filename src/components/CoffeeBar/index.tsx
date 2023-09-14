import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { THEME } from "../../styles/THEME"

type Props = TouchableOpacityProps & {
  title: string;
  description: string;
  value: number;
}

export function CoffeeBar({
  title,
  description,
  value,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image
        width={96}
        height={96}
        source={require("../../assets/images/expresso.png")}
        style={{ marginTop: -35 }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: THEME.colors.product["yellow-dark"]
            }}
        >R$
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: THEME.colors.product["yellow-dark"]
            }}
          > {value.toFixed(2)}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderWidth: 2,
    padding: 16,
    borderColor: THEME.colors.base["gray-700"],
    backgroundColor: THEME.colors.base["gray-800"],
    minHeight: 120
  },
  content: {
    flex: 1,
    gap: 8,
    paddingLeft: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.colors.base["gray-200"]
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: THEME.colors.base["gray-400"]
  },
})
