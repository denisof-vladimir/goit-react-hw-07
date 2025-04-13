import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';


export const selectItems = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleItems = createSelector(
  [selectItems, selectNameFilter],
  (items, textFilter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(textFilter)
    );
  }
);

const contactSliceReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      ;
  },
});

export default contactSliceReducer.reducer;