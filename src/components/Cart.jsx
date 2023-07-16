import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useId } from "react";
import { useCartProducts } from "../hooks/useCartProducts.js";
import './Cart.css'


function CartItem ({ thumbnail, price, title, quantity, addToCart,removeFromCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>

      </footer>
    </li>
  )
}



export const Cart = () => {
  const cartCheckboxId = useId();
  const { addToCart, cart, removeFromCart, clearCart } = useCartProducts();
  

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
