import { Image } from "react-native";
import { CoffeeBrand } from "../../dto/CoffeeDTO";

export function GetCoffeeBrand(image: CoffeeBrand) {
  switch (image) {
    case CoffeeBrand.expresso:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.americano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/americano.png")}
          style={{ marginTop: -35 }}
        />
      )
    case CoffeeBrand.capuccino:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/capuccino.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.chocolate_quente:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/chocolate-quente.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.cremoso:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso-cremoso.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.cubano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/cubano.png")}
          style={{ marginTop: -35 }}
        />
      )
    case CoffeeBrand.especial:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/cafe-gelado.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.havaiano:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/havaiano.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.latte:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/latte.png")}
          style={{ marginTop: -35 }}
        />
      );
    case CoffeeBrand.mocaccino:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/mochaccino.png")}
          style={{ marginTop: -35 }}
        />
      );
    default:
      return (
        <Image
          width={96}
          height={96}
          source={require("../../assets/images/expresso.png")}
          style={{ marginTop: -35 }}
        />
      );
    }
}
