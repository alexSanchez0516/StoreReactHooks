import { Cart } from "./Cart";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
export const Header = ( {OpenCartShop, openCartShop, cartShop, handlePointerOut,totalMoneyCartShop} ) => {
  return (
    <header className="flex px-2 bg-cyan-900 justify-between items-center ">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl mx-2 font-bold text-white">MACNIACOS</h1>
        <nav className="cart" onClick={OpenCartShop}>
          <ul className="list-none grid grid-cols-2">
            <li>
              <ShoppingBagIcon className="card__produts h-6 text-white" />
            </li>
            <li>
              <span className="card__produts bg-teal-400 text-sm  text-white cart__count">
                {cartShop.length}
              </span>
            </li>
          </ul>
        </nav>
      </div>

      {openCartShop && cartShop.length && (
        <div onClickCapture={handlePointerOut}>
          <Cart cartShop={cartShop} totalMoneyCartShop={totalMoneyCartShop} />
        </div>
      )}
    </header>
  );
};
