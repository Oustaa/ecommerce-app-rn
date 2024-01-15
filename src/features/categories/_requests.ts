import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("get/categories", async () => {
  const response = await axios.get(`${process.env.API_URL}/categories`);

  console.log(response.data);

  return response.data;
});
