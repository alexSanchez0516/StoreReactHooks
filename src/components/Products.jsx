import { Product } from "./Product";

export const Products = ({products}) => {

  return (
    <section className="flex flex-row justify-center flex-wrap gap-3 content-center">
    {products.map((product) => {
      return (
        <Product
          product={product}
        />
      );
    })}
  </section>
  );
} 