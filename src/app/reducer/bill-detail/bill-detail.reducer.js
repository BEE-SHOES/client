import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const BillDetailSlice = createSlice({
  name: "billDetail",
  initialState,
  reducers: {
    AddBillDetail: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateBillDetail: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutBillDetail: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteBillDetail: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetBillDetail: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdBillDetail: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetBillDetail = (state) => state.billDetail;
export const {
  AddBillDetail,
  UpdateBillDetail,
  DeleteBillDetail,
  SetBillDetail,
  PutBillDetail,
  FindByIdBillDetail,
} = BillDetailSlice.actions;
export default BillDetailSlice.reducer;
