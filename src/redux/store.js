import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters : filtersSlice,
  },
});

  

