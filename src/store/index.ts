import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../features/categories/categories-slice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
  devTools: process.env.VITE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
