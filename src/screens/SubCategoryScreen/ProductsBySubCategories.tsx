import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ProductsBySubCategoryInterface } from "../../features/categories/_models";
import { COLORS, SIZES } from "../../constants/intex";
import ProductsList from "../../components/Products/ProductsList";

type ProductsBySubCategoryProps = {
  subCategory: ProductsBySubCategoryInterface;
};

const ProductsBySubCategory: FC<ProductsBySubCategoryProps> = ({
  subCategory,
}) => {
  return (
    <View>
      <View style={styles.productsBySubCategoryHeader}>
        <Text>{subCategory._id}</Text>
        <Pressable>
          <Text style={styles.link}>View More</Text>
        </Pressable>
      </View>
      <ProductsList products={subCategory.products.slice(0, 4)} />
    </View>
  );
};

export default ProductsBySubCategory;

const styles = StyleSheet.create({
  productsBySubCategoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.md,
    paddingTop: SIZES.lg,
    backgroundColor: "#fff",
  },
  link: {
    fontSize: SIZES.sm,
    color: COLORS.primaryGreen500,
  },
});
