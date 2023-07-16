import { createContext, useState } from "react";


// Crear el contexto
export const FiltersContext = createContext();


// Proveer el contexto --> childen --> lo que envuelve

export function FilterProvider ({ children }) {

  const [ filters, setFilters ] = useState({
    category: 'all',
    price: 550,
    query: '',
  });


  return (
    <FiltersContext.Provider value={{
     filters, setFilters
    }}
    >

      {children}
    </FiltersContext.Provider>
  )
}