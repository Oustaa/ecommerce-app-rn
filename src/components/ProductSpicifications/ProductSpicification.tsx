import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

import { SpecificationInterface } from "../../features/products/_models";
import { COLORS, SIZES } from "../../constants/intex";

const ProductSpicification: FC<{ spicification: SpecificationInterface }> = ({
  spicification,
}) => {
  return (
    <View style={styles.spicificationCard}>
      <Text style={styles.spicificationName}>{spicification.name}: </Text>
      <Text style={styles.spicificationValue}>{spicification.value}</Text>
    </View>
  );
};

export default ProductSpicification;

const styles = StyleSheet.create({
  spicificationCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  spicificationName: {
    fontWeight: "normal",
    color: COLORS.primaryGray300,
    fontSize: SIZES.sm,
  },
  spicificationValue: {
    fontWeight: "normal",
    color: COLORS.primaryGray500,
    fontSize: SIZES.md,
  },
});
