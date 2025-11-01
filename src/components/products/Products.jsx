import React from "react";
import {
  ProductsWrapper,
  ProductsContainter,
  AboutTitle,
} from "./productsStyles";
import { products, cielorraso } from "../data/Productos";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <ProductsWrapper id="services">
      <div style={{ textAlign: "center" }}>
        <AboutTitle>Nuestros Productos</AboutTitle>
      </div>
      <AboutTitle>Placas</AboutTitle>
      <ProductsContainter>
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </ProductsContainter>
      <AboutTitle>Cielorraso</AboutTitle>
      <ProductsContainter>
        {cielorraso.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </ProductsContainter>
    </ProductsWrapper>
  );
};

export default Products;
