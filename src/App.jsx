import "./App.css";
import { Paginator } from "./components/Paginator";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Product } from "./components/Product";
import { FetchData } from "./services/fetchData";
const ROWS_PER_PAGE = 10;

function useSelectFilter() {
  const [query, setQuery] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [currentMinRange, setCurrentMinRange] = useState(10);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [categorySelect, query, currentMinRange]);

  const filterProducts = () => {
    let filterProducts =
      currentMinRange >= 10
        ? [...productCopy.current].filter(
            (product) => product.price >= currentMinRange
          )
        : productCopy.current;

    filterProducts =
      categorySelect !== undefined && categorySelect !== ""
        ? [...filterProducts].filter(
            (product) => product.category === categorySelect
          )
        : filterProducts;

    filterProducts =
      query != undefined && query !== ""
        ? [...filterProducts].filter((product) => {
            return product.title.toLowerCase().includes(query.toLowerCase());
          })
        : filterProducts;

    setProducts(filterProducts);
  };

  return {
    query,
    setQuery,
    categorySelect,
    setCategorySelect,
    currentMinRange,
    setCurrentMinRange,
    errors,
  };
}

function useSearchProducts() {
  const [products, setProducts] = useState([]);
  const productCopy = useRef([]);
  const [totalPage, setTotalPage] = useState();
  const [categorys, setCategorys] = useState([]);
  const [sortedPrice, setSortedPrice] = useState(false);
  const [sortedName, setSortedName] = useState(false);

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

  const sortedProducts = () => {
    let sortedProducts = sortedName
      ? [...products].sort((a, b) => a.title.localeCompare(b.title))
      : productCopy.current;
    sortedProducts = sortedPrice
      ? [...sortedProducts].sort((a, b) => a.price < b.price)
      : sortedProducts;
    setProducts(sortedProducts);
  };

  const mappedCategoriesFetchBy = (newProducts) => {
    let newCategories = Array.from(
      new Set(newProducts.map((product) => product.category))
    );
    setCategorys(newCategories);
  };

  const mappedProductsFetchBy = (newProducts) => {
    setProducts(newProducts);
    productCopy.current = newProducts;
  };

  const mappedTotalPagesByFetch = (totalPages) => {
    setTotalPage(Math.ceil(totalPages / ROWS_PER_PAGE));
  };

  useEffect(() => {
    SetDataOfFetch();
  }, []);

  useEffect(() => {
    sortedProducts();
  }, [sortedName, sortedPrice]);

  return { products, productCopy, categorys, totalPage };
}

function useCartShop({products}) {
  const [cartShop, setCartShop] = useState([]);
  const [totalMoneyCartShop, setTotalMoneyCartShop] = useState(0);
  const [openCartShop, setOpenCartShop] = useState(false);

  const refreshLocalStorage = () => {};

  const addProductIntoCarshop = (event) => {
    const idProductCartShop = event.target.id;
    const newCartShop = [...cartShop];

    const productLocatedInShop = products.find(
      (product) => product.id == idProductCartShop
    );
    if (productLocatedInShop) {
      const productLocateCarShopIndex = newCartShop.findIndex(
        (item) => item.product.id == idProductCartShop
      );

      if (productLocateCarShopIndex >= 0) {
        newCartShop[productLocateCarShopIndex].quantity++;
      } else {
        const ItemCarShop = { product: productLocatedInShop, quantity: 1 };
        newCartShop.push(ItemCarShop);
      }

      console.log(newCartShop);
      setCartShop(newCartShop);
      refreshLocalStorage();
    }
  };

  const calcTotalCarsShop = () => {
    const newSetTotalMoneyCartShop = cartShop.reduce(
      (total, num) => total + num.product.price * num.quantity,
      0
    );
    setTotalMoneyCartShop(newSetTotalMoneyCartShop);
  };

  const OpenCarshop = () => {
    setOpenCartShop(!openCartShop);
  };

  const handlePointerOut = (event) => {
    console.log(event);
    console.log("El puntero ha salido del elemento");
  };

  useEffect(() => {
    calcTotalCarsShop();
  }, [cartShop]);
}

function App() {

  // const { products, productCopy, categorys, totalPage } = useSearchProducts();

  
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const productCopy = useRef([]);
  const [sortedPrice, setSortedPrice] = useState(false);
  const [sortedName, setSortedName] = useState(false);
  const [currentMinRange, setCurrentMinRange] = useState(10);
  const [query, setQuery] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [cartShop, setCartShop] = useState([]);
  const [totalMoneyCartShop, setTotalMoneyCartShop] = useState(0);
  const [openCartShop, setOpenCartShop] = useState(false);

  useEffect(() => {
    SetDataOfFetch();
  }, []);

  useEffect(() => {
    sortedProducts();
  }, [sortedName, sortedPrice]);

  useEffect(() => {
    filterProducts();
  }, [categorySelect, query, currentMinRange]);

  useEffect(() => {
    calcTotalCarsShop();
  }, [cartShop]);

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
    productCopy.current = newProducts;
  };

  const mappedTotalPagesByFetch = (totalPages) => {
    setTotalPage(Math.ceil(totalPages / ROWS_PER_PAGE));
  };

  const filterProducts = () => {
    let filterProducts =
      currentMinRange >= 10
        ? [...productCopy.current].filter(
            (product) => product.price >= currentMinRange
          )
        : productCopy.current;

    filterProducts =
      categorySelect !== undefined && categorySelect !== ""
        ? [...filterProducts].filter(
            (product) => product.category === categorySelect
          )
        : filterProducts;

    filterProducts =
      query != undefined && query !== ""
        ? [...filterProducts].filter((product) => {
            return product.title.toLowerCase().includes(query.toLowerCase());
          })
        : filterProducts;

    setProducts(filterProducts);
  };

  const sortedProducts = () => {
    let sortedProducts = sortedName
      ? [...products].sort((a, b) => a.title.localeCompare(b.title))
      : productCopy.current;
    sortedProducts = sortedPrice
      ? [...sortedProducts].sort((a, b) => a.price < b.price)
      : sortedProducts;
    setProducts(sortedProducts);
  };

  const handleChangeRange = (event) => {
    setCurrentMinRange(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategorySelect(event.target.value);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSortName = () => {
    setSortedName(!sortedName);
  };

  const handleSortPrice = () => {
    setSortedPrice(!sortedPrice);
  };

  const refreshLocalStorage = () => {};

  const addProductIntoCarshop = (event) => {
    const idProductCartShop = event.target.id;
    const newCartShop = [...cartShop];

    const productLocatedInShop = products.find(
      (product) => product.id == idProductCartShop
    );
    if (productLocatedInShop) {
      const productLocateCarShopIndex = newCartShop.findIndex(
        (item) => item.product.id == idProductCartShop
      );

      if (productLocateCarShopIndex >= 0) {
        newCartShop[productLocateCarShopIndex].quantity++;
      } else {
        const ItemCarShop = { product: productLocatedInShop, quantity: 1 };
        newCartShop.push(ItemCarShop);
      }

      console.log(newCartShop);
      setCartShop(newCartShop);
      refreshLocalStorage();
    }
  };

  const calcTotalCarsShop = () => {
    const newSetTotalMoneyCartShop = cartShop.reduce(
      (total, num) => total + num.product.price * num.quantity,
      0
    );
    setTotalMoneyCartShop(newSetTotalMoneyCartShop);
  };

  const OpenCarshop = () => {
    setOpenCartShop(!openCartShop);
  };

  const handlePointerOut = (event) => {
    console.log(event);
    console.log("El puntero ha salido del elemento");
  };

  return (
    <>
      <Header
        cartShop={cartShop}
        handlePointerOut={handlePointerOut}
        openCartShop={openCartShop}
        OpenCartShop={OpenCarshop}
        totalMoneyCartShop={totalMoneyCartShop}
      />

      <main className="container mx-auto flex-wrap">
        <Filter
          query={query}
          categorys={categorys}
          handleChangeCategory={handleChangeCategory}
          handleChangeQuery={handleChangeQuery}
          handleChangeRange={handleChangeRange}
          handleSortName={handleSortName}
          handleSortPrice={handleSortPrice}
          sortedName={sortedName}
          sortedPrice={sortedPrice}
          currentMinRange={currentMinRange}
        />

        <section className="flex flex-row justify-center flex-wrap gap-3 content-center">
          {products.map((product) => {
            return (
              <Product
                addProductIntoCarshop={addProductIntoCarshop}
                product={product}
              />
            );
          })}
        </section>
        <footer>
          <Paginator page={page} setPage={setPage} totalPages={totalPage} />
        </footer>
      </main>
    </>
  );
}

export default App;
