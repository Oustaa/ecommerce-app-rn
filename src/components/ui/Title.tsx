import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { COLORS, SIZES } from "../../constants/intex";

const Title: FC<{ children: string }> = ({ children }) => {
  return <Text style={styles.productsListTitle}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  productsListTitle: {
    fontSize: SIZES.md,
    marginBottom: SIZES.sm,
    fontWeight: "400",
    color: COLORS.primaryGray300,
  },
});
