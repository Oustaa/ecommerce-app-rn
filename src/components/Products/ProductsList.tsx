import { FC } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ProductCard from "./ProductCard";
import { ProductType } from "../../core/productTypes";
import { SIZES } from "../../constants/intex";

const ProductsList: FC<{
  products: ProductType[];
  numColumns?: number;
  title: string;
}> = ({ products, numColumns = 2, title }) => {
  return (
    <View style={styles.productsListContainer}>
      <Text style={styles.productsListTitle}>{title}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <ProductCard product={item} />;
        }}
        columnWrapperStyle={{ gap: SIZES.sm }}
        numColumns={numColumns}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  productsListContainer: {
    padding: SIZES.sm,
    paddingBottom: 0,
    backgroundColor: "white",
  },
  productsListTitle: {
    fontSize: SIZES.lg,
    marginBottom: SIZES.sm,
    fontWeight: "500",
  },
});
