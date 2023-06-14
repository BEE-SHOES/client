import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const BillSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    AddBill: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateBill: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutBill: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteBill: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetBill: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdBill: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetBill = (state) => state.bill;
export const {
  AddBill,
  UpdateBill,
  DeleteBill,
  SetBill,
  PutBill,
  FindByIdBill,
} = BillSlice.actions;
export default BillSlice.reducer;
