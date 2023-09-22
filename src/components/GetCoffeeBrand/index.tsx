import { Image, ImageProps } from "react-native";
import { CoffeeBrand } from "../../dto/CoffeeDTO";

interface Props extends Partial<ImageProps> {
  image: CoffeeBrand;
}

export function GetCoffeeBrand({image, ...rest}: Props) {
  switch (image) {
    case CoffeeBrand.expresso:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.americano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/americano.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      )
    case CoffeeBrand.capuccino:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/capuccino.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.chocolate_quente:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/chocolate-quente.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.cremoso:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso-cremoso.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.cubano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/cubano.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      )
    case CoffeeBrand.especial:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/cafe-gelado.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.havaiano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/havaiano.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.latte:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/latte.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    case CoffeeBrand.mocaccino:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/mochaccino.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    default:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso.png")}
          style={{ marginTop: -35 }}
          {...rest}
        />
      );
    }
}
