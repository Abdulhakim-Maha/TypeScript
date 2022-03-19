import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: {}[];
  quntiity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quntiity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ price: number; quantity: number }>
    ) => {
      state.products.push(action.payload);
	  state.quntiity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
