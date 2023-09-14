import { ReactNode, createContext, useContext, useState } from "react";
import { Coffee } from "../components/Coffee";
import { ProductToast } from "../components/ProductToast";

interface Coffee {
  id: number;
  title: string;
  description: string;
  value: number;
  size: string;
  amount: number;
}


interface ContextProps {
  addToast: ({ id, title, description, value, size, amount }: Coffee) => void;
  clearToast: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ContextProps>({} as ContextProps);

export const ToastProvider = ({ children }: ProviderProps) => {
  const [toast, setToast] = useState<Coffee>({} as Coffee);

  const addToast = ({ id, title, description, value, size, amount }: Coffee) => {
    setToast({ id, title, description, value, size, amount });

    setTimeout(() => {
      setToast({} as Coffee);
    }, 5000);
  }

  const clearToast = () => {
    setToast({} as Coffee);
  }

  return (
    <ToastContext.Provider
      value={{
        addToast,
        clearToast
      }}
    >
      {children}

      {toast.id &&
        <ProductToast
          product={{
            id: toast.id,
            title: toast.title,
            description: toast.title,
            value: toast.value
          }}
          amount={toast.amount}
          size={toast.size}
        />
      }
    </ToastContext.Provider>
  )
}

export function useToast() {
  const toast = useContext(ToastContext);

  return toast;
}
