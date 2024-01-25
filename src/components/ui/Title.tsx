import { StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import React, { FC } from "react";
import { COLORS, SIZES } from "../../constants/intex";

const Title: FC<{
  children: string;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => {
  return <Text style={[styles.productsListTitle, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  productsListTitle: {
    fontSize: SIZES.md,
    marginBottom: SIZES.sm,
    fontWeight: "700",
    color: COLORS.primaryGray500,
  },
});
