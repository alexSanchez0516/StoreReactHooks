import { Button } from "./Button";

export const Filter = ({query, handleChangeQuery, handleChangeCategory, categorys, handleChangeRange, handleSortPrice,currentMinRange, handleSortName ,sortedName , sortedPrice}) => {
  return (
    <header className="flex justify-center my-4">
      <form className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <label className="uppercase mx-2 text-sm" htmlFor="query">
              Producto
            </label>
            <input
              type="text"
              name="query"
              value={query}
              className="bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md shadow-sm"
              onChange={handleChangeQuery}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="category" className="uppercase mx-2 text-sm">
              Categoria
            </label>
            <select
              className="p-1 my-1 w-full bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md shadow-sm"
              name="category"
              id="category"
              onChange={handleChangeCategory}
            >
              <option className="text-sm" defaultChecked></option>
              {categorys.map((category, index) => {
                return (
                  <option className="text-sm" key={index}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex items-center mx-2 justify-between">
            <label
              htmlFor="rangePrice"
              className="uppercase mx-2 text-sm text-end"
            >
              Precio
            </label>
            <input
              type="range"
              name="rangePrice"
              value={currentMinRange}
              min={10}
              step={10}
              max={999}
              onChange={handleChangeRange}
            />
            <label htmlFor="rangePrice">{currentMinRange}</label>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 ">
              <label htmlFor="sortedPrice">Ordenar por precio</label>
              <input
                value={sortedPrice}
                onChange={handleSortPrice}
                type="checkbox"
                name="sortedPrice"
                id="sortedPrice"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="sortedPrice">Ordenar alfabeticamente</label>
              <input
                value={sortedName}
                onChange={handleSortName}
                type="checkbox"
                name="sortedName"
                id="sortedName"
              />
            </div>
          </div>
        </div>
        <Button text={'Buscar'} />
      </form>
    </header>
  );
};
