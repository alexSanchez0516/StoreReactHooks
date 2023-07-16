import { useState, useEffect } from "react";

export function useSortProducts({ products, productsCopy }) {
  const [sortedPrice, setSortedPrice] = useState(false);
  const [sortedName, setSortedName] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleSortName = () => {
    setSortedName(!sortedName);
  };

  const handleSortPrice = () => {
    setSortedPrice(!sortedPrice);
  };

  const sortProducts = () => {
    let newSortedProducts = sortedName
      ? [...products].sort((a, b) => a.title.localeCompare(b.title))
      : productsCopy.current;
    newSortedProducts = sortedPrice
      ? [...newSortedProducts].sort((a, b) => a.price < b.price)
      : newSortedProducts;

    setSortedProducts(newSortedProducts);
  };

  useEffect(() => {
    sortProducts();
  }, [sortedName, sortedPrice]);

  return {
    handleSortPrice,
    handleSortName,
    sortedName,
    sortedPrice,
    sortedProducts,
  };
}
