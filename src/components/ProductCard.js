import React from "react";


const ProductCard = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
    <div className="bg-white border rounded-lg p-4 w-48 shadow-sm hover:shadow-md transition-shadow">
      <img src={product.image} alt={product.name} />
      <h2 className="font-semibold text-gray-800">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-gray-600">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
