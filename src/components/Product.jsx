import { ShoppingCartIcon } from "@heroicons/react/24/solid";
export const Product = ({product , addProductIntoCarshop}) => {
  return (
    <div
      className="w-3/4 md:w-3/12 lg:w-1/6 flex flex-col gap-4 mt-auto justify-center rounded-lg card__produts bg-slate-50 shadow-lg border-black p-4"
      key={product.id}
    >
      <img
        className="object-fill max-h-32 border-cyan-200"
        style={{ minHeight: "128px" }}
        src={product.thumbnail}
        alt=""
      />
      <span className="break-words text-sm font-bold text-center mb-4">
        {product.title}
      </span>
      <p className="line-clamp-2 text-sm">{product.description}</p>

      <div className="flex justify-end gap-2">
        <span className="text-right line-through">{product.price + 100}€</span>
        <span className="text-right">{product.price}€</span>
      </div>

      <button
        id={product.id}
        className="inline-flex items-center px-4 py-2 my-2
          bg-gray-900 dark:bg-cyan-600 border border-transparent rounded-md
            font-semibold text-xs text-white mx-2 uppercase tracking-widest hover:bg-cyan-800 dark:hover:cyan-300
          focus:bg-gray-700 dark:focus:bg-dark active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2
          focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
        onClick={addProductIntoCarshop}
      >
        Añadir al Carrito
        <ShoppingCartIcon className="h-6 text-white" />
      </button>
    </div>
  );
};
