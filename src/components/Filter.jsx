import { useId } from "react";
import { useFilterProducts } from "../hooks/useFilterProducts";
import { Button } from "./Button";
import { Label } from "./Label";
import { Input } from "./Input";
import { Select } from "./Select";

export const Filters = ({categories}) => {

  const { filters, setFilters } = useFilterProducts();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const queryFilterId = useId();

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }));
  };

  const handleChangeQuery = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      query: event.target.value
    }));
  };

  // Actualiza el state de filters, copiando su estado anterior y modificando el que corresponde
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      price: event.target.value
    }));
  };
  
  return (
    <header className="flex justify-center my-4">
      <form className="flex flex-col">
        <div className="flex flex-col gap-2">
          
          <div className="flex items-center">
           <Label text={'Producto'} forInput={'query'} />
           <Input handleChange={handleChangeQuery} 
           id={queryFilterId} name={'query'} value={filters.query} type={'text'} />
          </div>

          <div className="flex items-center">
           <Label text={'Categoria'} forInput={'category'} />
           <Select options={categories} 
                   handleChange={handleChangeCategory}
                   id={categoryFilterId}
                   name={'category'} />
          </div>

          <div className="flex items-center mx-2 justify-between">
            <Label text={'Precio'} forInput={minPriceFilterId} />
            <Input handleChange={handleChangeMinPrice} 
                  id={minPriceFilterId} name={'rangePrice'} 
                  max={1400} min={10} step={10} 
                 type={'range'} value={filters.price} />

            <Label text={filters.price} forInput={minPriceFilterId} />
          </div>

          {/* <div className="flex gap-2 flex-col">
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
          </div> */}
        </div>
        <Button text={'Buscar'} />
      </form>
    </header>
  );
};
