import { StyleSheet, FlatList, View } from "react-native";
import React, { FC } from "react";
import { SpecificationInterface } from "../../features/products/_models";
import ProductSpicification from "./ProductSpicification";
import Title from "../ui/Title";
import { globalStyles } from "../../styles/globalStyles";
import { SIZES } from "../../constants/intex";

const ProductSpicifications: FC<{
  specifications: SpecificationInterface[];
}> = ({ specifications }) => {
  return (
    <View style={styles.ProductSpicificationsContainer}>
      <Title style={{ marginTop: SIZES.sm, marginBottom: SIZES.xs }}>
        Product's Specifications
      </Title>
      <FlatList
        data={specifications}
        renderItem={({ item }) => <ProductSpicification spicification={item} />}
      />
    </View>
  );
};

export default ProductSpicifications;

const styles = StyleSheet.create({
  ProductSpicificationsContainer: {
    marginHorizontal: SIZES.sm,
  },
});
