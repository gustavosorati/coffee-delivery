import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  value: number;
  items: {
    size: string;
    amount: number;
  }[];
}

interface ContextProps {
  products: Product[];
  addProduct: (
    id: number,
    title: string,
    description: string,
    value: number,
    amount: number,
    size: string
  ) => void;
  deleteProduct: (id: number, size: string) => void;
  total: number;
}

interface ProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ContextProps>({} as ContextProps);

export const CartProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const addProduct = (
    id: number,
    title: string,
    description: string,
    value: number,
    amount: number,
    size: string
  ) => {
    if(products.length === 0){
      setProducts([
        {
          id,
          title,
          description,
          value,
          items: [{ amount, size }]
        }
      ]);
      return;
    }

    // clona os products
    const listOfCoffees = [...products];

    // // procura se o index do café existe
    const coffeeIndex = listOfCoffees.findIndex((product) => product.id === id);

    // // se o index do café existe, verificar se o size existe
    if(coffeeIndex !== -1) {
      const coffeeSizeIndex = listOfCoffees[coffeeIndex].items.findIndex(item => item.size === size);

      // se nao existe criar um novo item
      if(coffeeSizeIndex === -1){
        listOfCoffees[coffeeIndex].items.push({
          size,
          amount
        });
      } else {
        listOfCoffees[coffeeIndex].items[coffeeSizeIndex].amount = amount;
      }
    } else {
      listOfCoffees.push({
        id,
        title,
        description,
        value,
        items: [{ amount, size }]
      });
    }

    setProducts(listOfCoffees);
  }

  const deleteProduct = (id: number, size: string) => {
    const updatedProducts = [...products];

    const productIndex = updatedProducts.findIndex(product => product.id === id);

    if (productIndex !== -1) {
      const sizeIndex = updatedProducts[productIndex].items.findIndex(item => item.size === size);

      if (sizeIndex !== -1) {
        updatedProducts[productIndex].items.splice(sizeIndex, 1);

        if (updatedProducts[productIndex].items.length === 0) {
          updatedProducts.splice(productIndex, 1);
        }

        setProducts(updatedProducts);
      }
    }
  }

  const totalController = () => {
    let priceTotal = 0;

    products.forEach((product) => {
      const amountCoffees = product.items.reduce((acc, prod) => {
        return acc += prod.amount;
      }, 0);

      priceTotal += amountCoffees * product.value
    });

    setTotal(priceTotal);
  };

  useEffect(() => {
    totalController()
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const cart = useContext(CartContext);

  return cart;
}
