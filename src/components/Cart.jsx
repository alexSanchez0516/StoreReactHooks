import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ProductItemCartShop } from "./ProductItemCartShop";
import { Button } from "./Button";

export const Cart = ({cartShop, totalMoneyCartShop}) => {
  return (
    <div className="cart__shop">
      <hr style={{ backgroundColor: "red" }} />

      {cartShop.map((itemCart, index) => {
        return <ProductItemCartShop itemCart={itemCart} />
      })}
      <div className="mt-4 flex flex-col items-center">
        <span className="text-center">
          TOTAL:{" "}
          <span className="underline cursor-pointer">{totalMoneyCartShop}</span>
        </span>
        <Button text={'Ver la cesta'}>
          <ShoppingCartIcon className="h-6 text-white" />
        </Button>        
      </div>
    </div>
  );
};
