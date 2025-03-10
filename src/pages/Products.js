import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Custom Mug 1",
    description: "This is the description for Product 1.",
    price: 29.99,
    image: "https://th.bing.com/th/id/OIP.oHjYuOTLGgbFyPE0CFhJVQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 2,
    name: "Custom Mug 2",
    description: "This is the description for Product 2.",
    price: 49.99,
    image: "https://th.bing.com/th/id/OIP.oHjYuOTLGgbFyPE0CFhJVQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 3,
    name: "Personalized T-Shirt 1",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "https://th.bing.com/th/id/OIP.oHjYuOTLGgbFyPE0CFhJVQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 4,
    name: "Personalized T-Shirt 2",
    description: "This is the description for Product 4.",
    price: 99.99,
    image: "https://th.bing.com/th/id/OIP.oHjYuOTLGgbFyPE0CFhJVQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Products = () => {
  return (
    <div className="products flex flex-wrap gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
