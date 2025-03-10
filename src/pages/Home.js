import React from "react";
import ProductCard from "../components/ProductCard";



const featuredProducts = [
  {
    id: 1,
    name: "Quà 8/3 cho mẹ",
    description: "This is the description for Featured Product 1.",
    price: 29.99,
    image:
      "https://product.hstatic.net/1000360579/product/4bd6745cf9424b23b921ac98d94fa6bb_f95de59386fe40709ba6e23c827ff3b2_master.jpg",
  },
  {
    id: 2,
    name: "Featured Product 2",
    description: "This is the description for Featured Product 2.",
    price: 49.99,
    image:
      "https://product.hstatic.net/1000360579/product/4bd6745cf9424b23b921ac98d94fa6bb_f95de59386fe40709ba6e23c827ff3b2_master.jpg",
  },
  {
    id: 3,
    name: "Featured Product 3",
    description: "This is the description for Featured Product 3.",
    price: 19.99,
    image:
      "https://product.hstatic.net/1000360579/product/4bd6745cf9424b23b921ac98d94fa6bb_f95de59386fe40709ba6e23c827ff3b2_master.jpg",
  },
];

const Home = () => {
  return (
    <div className="p-5 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Gifté</h1>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
