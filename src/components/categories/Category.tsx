import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/intex";

const category = {
  _id: "64551d611e8c8ddc4b017a00",
  name: "Toys and Games",
  image: "toys-and-games.jpg",
};

const Category = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${process.env.API_URL}/images/categories/${category.image}`,
          }}
          style={styles.categoryImage}
        />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: SIZES.xs,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryName: {
    fontSize: SIZES.sm,
    color: COLORS.primaryGray300,
  },
});
