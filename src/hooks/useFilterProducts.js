import { useContext } from "react";
import { FiltersContext } from "../context/filter";


export function useFilterProducts() {

  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price
                      &&
        ( filters.category === 'all' || filters.category === product.category )
                      && 
        ( filters.query === '' || product.title.toLowerCase().includes(filters.query.toLowerCase()) )
      )
    }); 
  };

  return {
   filters, 
   filterProducts,
   setFilters
  };
}