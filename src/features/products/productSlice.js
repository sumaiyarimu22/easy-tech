import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//product fetch korbo axios dia axios k manipulate korbe createAsyncThunk.

// data rakhar jonno initialState = state
const initialState = {
  items: [],
  status: null,
};

//2ta argument location,product fetch
export const productFetching = createAsyncThunk(
  "products/productFetching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productFetching.pending, (state, action) => {
      state.status = "Loading....";
    });
    builder.addCase(productFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });
    builder.addCase(productFetching.rejected, (state, action) => {
      state.status = "something went wrong";
    });
  },
});

export default productSlice.reducer;
