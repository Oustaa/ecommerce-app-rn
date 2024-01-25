import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

import { SpecificationInterface } from "../../features/products/_models";
import { COLORS, SIZES } from "../../constants/intex";

const ProductSpicification: FC<{ spicification: SpecificationInterface }> = ({
  spicification,
}) => {
  return (
    <Text style={styles.spicificationName}>
      {spicification.name}:{" "}
      <Text style={styles.spicificationValue}>{spicification.value}</Text>
    </Text>
  );
};

export default ProductSpicification;

const styles = StyleSheet.create({
  spicificationName: {
    fontWeight: "normal",
    color: COLORS.primaryGray300,
    fontSize: SIZES.sm,
    marginBottom: 0,
  },
  spicificationValue: {
    fontWeight: "normal",
    color: COLORS.primaryGray500,
    fontSize: SIZES.md,
  },
});
