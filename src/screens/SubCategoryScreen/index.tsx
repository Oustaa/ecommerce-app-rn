import { StyleSheet, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProductsByCategory } from "../../features/categories/_models";
import { getProductByCategoryId } from "../../features/categories/_requests";
import Loader from "../../components/ui/Loader";
import ProductsBySubCategory from "./ProductsBySubCategories";

type SingleCategoryRouteParams = {
  categoryId: string;
};

const SubCategoryScreen = () => {
  const route =
    useRoute<RouteProp<Record<string, SingleCategoryRouteParams>, string>>();
  const {
    params: { categoryId },
  } = route;

  const [loading, setLoading] = useState<boolean>(true);
  const [productsByCategoryId, setProductsByCategoryId] =
    useState<ProductsByCategory>([]);

  const getProductsByCategoryId = async (categoryId: string) => {
    setLoading(true);
    const productsByCategory = await getProductByCategoryId(categoryId);

    setProductsByCategoryId(productsByCategory);
    setLoading(false);
  };

  useEffect(() => {
    getProductsByCategoryId(categoryId);
  }, []);
  if (loading) return <Loader />;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {productsByCategoryId.length ? (
        productsByCategoryId.map((subCategory) => (
          <ProductsBySubCategory
            subCategory={subCategory}
            key={subCategory._id}
          />
        ))
      ) : (
        <Text>This Category has no products</Text>
      )}
    </ScrollView>
  );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({});
