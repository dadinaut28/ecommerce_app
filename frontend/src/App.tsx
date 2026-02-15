import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import type { Product } from "./components/ProductCard";

export interface CartProduct extends Product {
  quantity: number;
}

// addNewCartProduct,
//           cartProducts,
//           increaseCartProductQuantity,
//           decreaseCartProductQuantity,
//           calculateCartProductsTotalPrice,
//           showAccountCreationSuccessMessage,
//           onAccountCreationSuccess,
//           showAskUserToConnectMessage,
//           onUnconnectedUserTryingProtectedAction,
//           onCartProductDeletionConfirmed,

export interface Context {
  addNewCartProduct: (product: Product | null) => void;
  cartProducts: CartProduct[];
  increaseCartProductQuantity: (productId: number) => void;
  decreaseCartProductQuantity: (productId: number) => void;
  calculateCartProductsTotalPrice: () => number;
  showAccountCreationSuccessMessage: boolean;
  onAccountCreationSuccess: () => void;
  showAskUserToConnectMessage: boolean;
  onUnconnectedUserTryingProtectedAction: () => void;
  onCartProductDeletionConfirmed: (productId: number) => void;
}

function App() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addNewCartProduct = (product: Product) => {
    // Verify if the product being added is already in cartProducts to increase his quantity
    const findedProduct = cartProducts?.find((item) => item.id === product.id);

    if (findedProduct) {
      setCartProducts(
        cartProducts.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: findedProduct.quantity + 1 };
          } else {
            return item;
          }
        }),
      );
    } else {
      const newCartProduct = { ...product, quantity: 1 };
      setCartProducts([...cartProducts, newCartProduct]);
    }
  };

  const increaseCartProductQuantity = (productId: number) => {
    setCartProducts((prevValue: CartProduct[]) => {
      return prevValue.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    });
  };

  const decreaseCartProductQuantity = (productId: number) => {
    setCartProducts((prevValue) => {
      return prevValue.map((product) => {
        return product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
    });
  };

  const calculateCartProductsTotalPrice = () => {
    return cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  };

  const [
    showAccountCreationSuccessMessage,
    setShowAccountCreationSuccessMessage,
  ] = useState(false);

  const onAccountCreationSuccess = () => {
    setShowAccountCreationSuccessMessage(true);
    setTimeout(() => {
      setShowAccountCreationSuccessMessage(false);
    }, 3000);
  };

  const [showAskUserToConnectMessage, setShowAskUserToConnectMessage] =
    useState(false);

  const onUnconnectedUserTryingProtectedAction = () => {
    setShowAskUserToConnectMessage(true);
    setTimeout(() => {
      setShowAskUserToConnectMessage(false);
    }, 2000);
  };

  const onCartProductDeletionConfirmed = (productId: number) => {
    setCartProducts((prevValue) => {
      return prevValue.filter((cartProduct) => {
        return cartProduct.id !== productId;
      });
    });
  };

  return (
    <>
      <NavBar />
      <Outlet
        context={{
          addNewCartProduct,
          cartProducts,
          increaseCartProductQuantity,
          decreaseCartProductQuantity,
          calculateCartProductsTotalPrice,
          showAccountCreationSuccessMessage,
          onAccountCreationSuccess,
          showAskUserToConnectMessage,
          onUnconnectedUserTryingProtectedAction,
          onCartProductDeletionConfirmed,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
