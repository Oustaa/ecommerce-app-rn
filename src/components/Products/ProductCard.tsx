import { Image, StyleSheet, Pressable, View } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { ProductType } from "../../core/productTypes";
import { COLORS, SIZES } from "../../constants/intex";
import sizes from "../../constants/sizes";

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      style={styles.ImageContainer}
      onPress={() => navigate("single_product_screen", { id: product._id })}
    >
      <Image
        style={styles.imageStyle}
        resizeMode="center"
        source={{
          uri: `${process.env.API_URL}/images/${product.store}/products/${product.images[0]}`,
        }}
      />
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    marginBottom: SIZES.sm,
    padding: SIZES.sm,
    borderRadius: SIZES.xs,
    overflow: "hidden",
    borderWidth: 0.2,
    borderColor: COLORS.primaryGray300,
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 1,
  },
});
