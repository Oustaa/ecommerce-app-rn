import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Category from "./Category";
import { globalStyles } from "../../styles/globalStyles";
import { SIZES } from "../../constants/intex";

const CategoriesContainer = () => {
  return (
    <View style={styles.containerContainer}>
      <Category />
    </View>
  );
};

export default CategoriesContainer;

const styles = StyleSheet.create({
  containerContainer: {
    padding: SIZES.sm,
  },
});
