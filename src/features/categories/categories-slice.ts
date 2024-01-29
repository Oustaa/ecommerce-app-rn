import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./_requests";
import { CategoriesInterface } from "./_models";

interface InitialStateType {
  loading: boolean;
  data: CategoriesInterface;
}

const initialState: InitialStateType = {
  loading: false,
  data: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<CategoriesInterface>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
