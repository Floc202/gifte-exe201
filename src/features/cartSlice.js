import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state ban đầu
const initialState = {
  items: [], // Danh sách sản phẩm trong giỏ hàng
  total: 0, // Tổng tiền
};

// Tạo slice
const cartSlice = createSlice({
  name: "cart", // Tên của slice
  initialState, // State ban đầu
  reducers: {
    // Reducer để thêm sản phẩm vào giỏ hàng
    addToCart: (state, action) => {
      const product = action.payload; // Sản phẩm được truyền vào
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        existingItem.quantity += 1;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        state.items.push({ ...product, quantity: 1 });
      }

      // Cập nhật tổng tiền
      state.total += product.price;
    },

    // Reducer để xóa sản phẩm khỏi giỏ hàng
    removeFromCart: (state, action) => {
      const productId = action.payload; // ID của sản phẩm cần xóa
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        // Giảm số lượng nếu sản phẩm có số lượng > 1
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Nếu số lượng = 1, xóa sản phẩm khỏi giỏ hàng
          state.items = state.items.filter((item) => item.id !== productId);
        }

        // Cập nhật tổng tiền
        state.total -= existingItem.price;
      }
    },

    // Reducer để xóa toàn bộ giỏ hàng
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

// Export các actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
