import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartInterface } from "./types";

interface InitialStateType {
  loading: boolean;
  data: CartInterface | null;
}

const initialState: InitialStateType = {
  loading: false,
  data: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default categoriesSlice.reducer;
