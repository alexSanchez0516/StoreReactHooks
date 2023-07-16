import { useCartProducts } from "../hooks/useCartProducts";
import { useFilterProducts } from "../hooks/useFilterProducts";
import { Paginator } from "./Paginator";

import "./Footer.css";

export function Footer() {
  const { filters } = useFilterProducts();
  const { cart } = useCartProducts();

  return (
    <footer>
      {/* <div className="footer">
        {JSON.stringify(filters, null, 2)}
        {JSON.stringify(cart, null, 2)}
      </div> */}
      <Paginator page={1} totalPages={5} />
    </footer>
  );
}
