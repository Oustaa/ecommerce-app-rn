import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductsByCategory } from "./_models";

export const getCategories = createAsyncThunk("get/categories", async () => {
  const response = await axios.get(`${process.env.API_URL}/categories`);

  console.log(response.data);

  return response.data;
});

export async function getProductByCategoryId(
  categoryId: string
): Promise<ProductsByCategory> {
  const resp = await axios.get(
    `${process.env.API_URL}/products/category/${categoryId}`
  );

  const data = resp.data;

  return data;
}
