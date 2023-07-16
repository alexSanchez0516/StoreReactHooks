import { useState, useEffect, useRef } from "react";
import { FetchData } from '../services/fetchData'
import { ROWS_PER_PAGE } from "../constants";

export function useSearchProducts() {
  const [products, setProducts] = useState([]);
  const productsCopy = useRef([]);
  const [totalPage, setTotalPage] = useState();
  const [categorys, setCategorys] = useState([]);

  const SetDataOfFetch = async () => {
    try {
      const json = await FetchData();
      const newProducts = [...json.products];

      mappedCategoriesFetchBy(newProducts);
      mappedProductsFetchBy(newProducts);
      mappedTotalPagesByFetch(json.total);
    } catch (error) {
      console.log(error);
    }
  };

  const mappedCategoriesFetchBy = (newProducts) => {
    let newCategories = Array.from(
      new Set(newProducts.map((product) => product.category))
    );
    setCategorys(newCategories);
  };

  const mappedProductsFetchBy = (newProducts) => {
    setProducts(newProducts);
    productsCopy.current = newProducts;
  };

  const mappedTotalPagesByFetch = (totalPages) => {
    setTotalPage(Math.ceil(totalPages / ROWS_PER_PAGE));
  };

  useEffect(() => {
    SetDataOfFetch();
  }, []);

  return { products, productsCopy, categorys, setProducts };
}