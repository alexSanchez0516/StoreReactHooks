import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/solid";

export const ProductItemCartShop = ({itemCart}) => {
  return (
    <>
      <div
        className="flex flex-col items-center md:flex-row md:gap-2 justify-between"
        key={itemCart.product.id}
      >
        <img
          className="w-16 rounded-full m-1"
          src={itemCart.product.thumbnail}
          alt=""
        />
        <strong>{itemCart.product.title}</strong>
        <div className="flex items-center justify-center">
          <span>Unidades: {itemCart.quantity}</span>
          <div className="flex flex-col">
            <PlusCircleIcon className="text-black w-6  cursor-pointer m-1" />
            <MinusCircleIcon className="text-black w-6 cursor-pointer m-1" />
          </div>
        </div>
        <span className="underline">
          Total: {itemCart.product.price * itemCart.quantity}
        </span>
      </div>
      <hr />
    </>
  );
};
