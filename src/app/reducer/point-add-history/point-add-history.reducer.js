import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PointAddHistorySlice = createSlice({
  name: "pointAddHistory",
  initialState,
  reducers: {
    AddPointAddHistory: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdatePointAddHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutPointAddHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeletePointAddHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetPointAddHistory: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdPointAddHistory: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetPointAddHistory = (state) => state.pointAddHistory;
export const {
  AddPointAddHistory,
  UpdatePointAddHistory,
  DeletePointAddHistory,
  SetPointAddHistory,
  PutPointAddHistory,
  FindByIdPointAddHistory,
} = PointAddHistorySlice.actions;
export default PointAddHistorySlice.reducer;
