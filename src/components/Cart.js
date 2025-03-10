import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Lấy state từ store
  const dispatch = useDispatch(); // Sử dụng dispatch để gọi actions

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch action thêm sản phẩm vào giỏ hàng
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch action xóa sản phẩm khỏi giỏ hàng
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch action xóa toàn bộ giỏ hàng
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
