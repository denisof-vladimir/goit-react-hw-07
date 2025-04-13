import { createSlice } from '@reduxjs/toolkit';
export const selectNameFilter= (state) => state.filters.name;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
    },
  reducers: {
    changeFilters: (state, action) => {
        state.name = action.payload.toLowerCase();
    },
  },
});
export const { changeFilters } = filtersSlice.actions;
export default filtersSlice.reducer;