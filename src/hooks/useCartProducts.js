import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCartProducts = () => {

  const context = useContext(CartContext);

  if (context == undefined) {
    throw new Error('useCart must be used with a CartProvider');
  }

  return context;
}