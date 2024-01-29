import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";

import Category from "./Category";
import { SIZES } from "../../constants/intex";
import Title from "../ui/Title";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../ui/Loader";
import { getCategories } from "../../features/categories/_requests";

const CategoriesContainer = () => {
  const dispatch = useAppDispatch();
  const { data: categories, loading } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.containerContainer}>
      <Title>Shop by category</Title>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={({ item }) => <Category category={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: SIZES.md }}
        />
      )}
    </View>
  );
};

export default CategoriesContainer;

const styles = StyleSheet.create({
  containerContainer: {
    padding: SIZES.sm,
  },
  loaderContainer: {
    paddingVertical: SIZES.md,
  },
});
