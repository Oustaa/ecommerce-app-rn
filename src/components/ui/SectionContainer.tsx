import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/intex";

const SectionContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <View style={styles.ProductSpicificationsContainer}>{children}</View>;
};

export default SectionContainer;

const styles = StyleSheet.create({
  ProductSpicificationsContainer: {
    marginHorizontal: SIZES.sm,
    marginTop: SIZES.md,
  },
});
