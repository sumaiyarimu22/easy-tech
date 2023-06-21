import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check if the item is already in the cart
      const existedItemIndex = state.cartItem.findIndex(
        (item) => item.name === action.payload.name
      );

      //if exist
      if (existedItemIndex >= 0) {
        //increase quantity
        state.cartItem[existedItemIndex].cartQuantity += 1;

        toast.info("Quantity increased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        //add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(assembledItem);

        toast.success("Product added", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      // add in local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    //remove
    removeFromCart(state, action) {
      const updatedCartItem = state.cartItem.filter(
        (item) => item.name !== action.payload.name
      );
      state.cartItem = updatedCartItem;

      toast.warn("Product removed!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    //clear cart
    clearCart(state, action) {
      state.cartItem = [];

      toast.error("Cart cleared", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    //quantity decrease
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.name === action.payload.name
      );
      //if exist
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;

        toast.info("Quantity decreased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const updatedCartItem = state.cartItem.filter(
          (item) => item.name !== action.payload.name
        );
        state.cartItem = updatedCartItem;

        toast.warn("Product removed!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
      // update local storage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    //subTotal
    // reduce(acc,value,index,arr)
    getSubTotal(state, action) {
      const subTotal = state.cartItem.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;

        acc += itemTotal;
        return acc;
      }, 0);

      state.cartTotalAmount = subTotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
