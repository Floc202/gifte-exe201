import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'; // Import slice của giỏ hàng

// Tạo store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Thêm slice vào store
    // Bạn có thể thêm nhiều slice khác ở đây
  },
});

export default store;