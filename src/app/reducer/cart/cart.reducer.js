import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateCart: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutCart: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteCart: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetCart: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdCart: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetCart = (state) => state.cart;
export const {
  AddCart,
  UpdateCart,
  DeleteCart,
  SetCart,
  PutCart,
  FindByIdCart,
} = CartSlice.actions;
export default CartSlice.reducer;
