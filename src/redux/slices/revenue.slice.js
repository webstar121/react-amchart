import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../client/cubeClient";

export const getRevenue = createAsyncThunk("get/Revenue", async (query) => {
  const results = await getData(query);
  return results;
});

const revenueSlice = createSlice({
  name: "revenue",
  initialState: {
    loading: false,
    revenue: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRevenue.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.revenue = action.payload?.data;
      })
      .addCase(getRevenue.rejected, (state) => {
        state.loading = false;
        state.revenue = null;
      });
  },
});

export default revenueSlice.reducer;
