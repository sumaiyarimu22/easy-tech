import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check if the item is already in the cart
      const existedItemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      //if exist
      if (existedItemIndex >= 0) {
        //increase quantity
        state.cartItem[existedItemIndex].cartQuantity += 1;
      } else {
        //add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(assembledItem);
      }
      // add in local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    //remove
    removeFromCart(state, action) {
      const updatedCartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = updatedCartItem;
      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    //clear cart
    clearCart(state, action) {
      state.cartItem = [];
      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    //quantity decrease
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      //if exist
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const updatedCartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItem = updatedCartItem;
      }
      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
