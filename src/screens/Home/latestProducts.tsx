import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { ProductType } from "../../core/productTypes";
import ProductsList from "../../components/Products/ProductsList";
import { SIZES } from "../../constants/intex";

async function getLatestProducts(
  successCb: React.Dispatch<React.SetStateAction<ProductType[]>>,
  loadingCb: React.Dispatch<React.SetStateAction<boolean>>
) {
  console.log(process.env.API_URL);
  try {
    const response = await axios.get(`${process.env.API_URL}/products/latest`);
    successCb(response.data);
  } catch (error) {
    console.log({ error, sdf: "dfdsfdsgdfsgsfdgf " });
  } finally {
    loadingCb(false);
  }
}

const latestProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setLoading(true);
    getLatestProducts(setProducts, setLoading);
  }, []);

  if (loading) return <ActivityIndicator />;

  return <ProductsList products={products} title="Latest Uploaded Products" />;
};

export default latestProducts;

const styles = StyleSheet.create({});
