import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Cart } from "./Cart";
export const Header = () => {
  return (
    <>
    <header className="flex flex-col px-2 bg-cyan-900 justify-between items-center ">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl mx-2 font-bold text-white">MACNIACOS</h1>
        <Cart />
      </div>
    </header>
    </>
  );
};
