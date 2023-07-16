import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

// 1. Crear contexto

export const CartContext = createContext();



export function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()


  // const addToCart = (product) => {
  //   const productInCartIndex = cart.findIndex((productCart) => productCart.id === product.id);

    
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity++;
  //     return setCart(newCart);

  //   } else {
  //     setCart(prevState => ([
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1
  //       }
  //     ]))
  //   }
  // };


  // const removeFromCart = (product) => {
  //   const productInCartIndex = cart.findIndex((productCart) => productCart.id === product.id);
  //   if (productInCartIndex != -1) {
  //     const newCart = structuredClone(cart);
  //     if (newCart[productInCartIndex].quantity > 1) {
  //       newCart[productInCartIndex].quantity--
  //       // setCart(newCart);
  //     } else {
  //       newCart.splice(productInCartIndex, 1);
  //       // setCart((prevState) => {
  //       //   prevState.filter((item) => item.id !== product.id);
  //       // });
  //     }
  //     setCart(newCart);
  //   }

  // }

  // const clearCart = () => {
  //   setCart([]);
  // };

  return (
    <CartContext.Provider
      value={{ 

        cart: state,
        addToCart,
        removeFromCart,
        clearCart

       }}
    >{children}</CartContext.Provider>
  );
}
