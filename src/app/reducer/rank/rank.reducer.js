import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const RankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {
    AddRank: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateRank: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutRank: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteRank: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetRank: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdRank: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetRank = (state) => state.rank;
export const {
  AddRank,
  UpdateRank,
  DeleteRank,
  SetRank,
  PutRank,
  FindByIdRank,
} = RankSlice.actions;
export default RankSlice.reducer;
