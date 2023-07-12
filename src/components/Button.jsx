export const Button = ({text}) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 my-2
                bg-gray-900 dark:bg-cyan-900 border border-transparent rounded-md
                  font-semibold text-xs text-white mx-2 uppercase tracking-widest hover:bg-cyan-800 dark:hover:cyan-300
                focus:bg-gray-700 dark:focus:bg-dark active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
    >
      {text}
    </button>
  );
};
