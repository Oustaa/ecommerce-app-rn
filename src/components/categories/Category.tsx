import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { COLORS, SIZES } from "../../constants/intex";
import { useNavigation } from "@react-navigation/native";

interface categoryInterface {
  _id: string;
  name: string;
  image: string;
}

const Category: FC<{ category: categoryInterface }> = ({ category }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => navigate("category_screen", { categoryId: category._id })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${process.env.API_URL}/images/categories/${category.image}`,
          }}
          style={styles.categoryImage}
        />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </Pressable>
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
    width: 60,
    textAlign: "center",
  },
});
