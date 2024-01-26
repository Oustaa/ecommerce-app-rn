import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../ui/Title";
import { SIZES } from "../../constants/intex";

const ProductDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  console.log(description);
  return (
    <View style={styles.ProductSpicificationsContainer}>
      <Title>Description</Title>
      <Text>{description}</Text>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  ProductSpicificationsContainer: {
    marginHorizontal: SIZES.sm,
    marginTop: SIZES.md,
  },
});
