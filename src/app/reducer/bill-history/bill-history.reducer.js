import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const BillHistorySlice = createSlice({
  name: "billHistory",
  initialState,
  reducers: {
    AddBillHistory: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateBillHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutBillHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteBillHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetBillHistory: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdBillHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetBillHistory = (state) => state.billHistory;
export const {
  AddBillHistory,
  UpdateBillHistory,
  DeleteBillHistory,
  SetBillHistory,
  PutBillHistory,
  FindByIdBillHistory,
} = BillHistorySlice.actions;
export default BillHistorySlice.reducer;
