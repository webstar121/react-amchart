import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../client/cubeClient";

export const getGrossMargin = createAsyncThunk(
  "get/GrossMargin",
  async (query) => {
    const results = await getData(query);
    return results;
  }
);

const grossMarginSlice = createSlice({
  name: "grossMargin",
  initialState: {
    loading: false,
    grossMargin: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGrossMargin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGrossMargin.fulfilled, (state, action) => {
        state.loading = false;
        state.grossMargin = action.payload?.data;
      })
      .addCase(getGrossMargin.rejected, (state) => {
        state.loading = false;
        state.grossMargin = null;
      });
  },
});

export default grossMarginSlice.reducer;
