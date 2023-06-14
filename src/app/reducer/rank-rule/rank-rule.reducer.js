import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const RankRuleSlice = createSlice({
  name: "rankRule",
  initialState,
  reducers: {
    AddRankRule: (state, action) => {
      state.push(action.payload);
      return state;
    },
    UpdateRankRule: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
        return state;
      }
    },
    PutRankRule: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },

    DeleteRankRule: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetRankRule: (state, action) => {
      state = action.payload;
      return state;
    },
    FindByIdRankRule: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        return state[index];
      }
    },
  },
});

export const GetRankRule = (state) => state.rankRule;
export const {
  AddRankRule,
  UpdateRankRule,
  DeleteRankRule,
  SetRankRule,
  PutRankRule,
  FindByIdRankRule,
} = RankRuleSlice.actions;
export default RankRuleSlice.reducer;
