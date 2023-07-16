import "./App.css";
import { Header } from "./components/Header";
import { useSearchProducts } from "./hooks/useSearchProducts";
import { useFilterProducts } from "./hooks/useFilterProducts";
import { Products } from "./components/Products";
import { Filters } from "./components/Filter";
import { CartProvider } from "./context/cart";
import { Footer } from "./components/Footer";

function App() {
  const { products, productsCopy, categorys, setProducts } = useSearchProducts();
  const { filterProducts } = useFilterProducts();
  const filteredProdutcts = filterProducts(products);

  return (
    <CartProvider>
      <main className="">
        <Header/>
        <Filters categories={categorys} />
        <Products products={filteredProdutcts} />
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
