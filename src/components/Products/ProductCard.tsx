import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { getImgUrl } from "../../utils/imageConstructor";
import { ProductType } from "../../core/productTypes";
import { COLORS, SIZES } from "../../constants/intex";
import sizes from "../../constants/sizes";

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        style={styles.imageStyle}
        resizeMode="center"
        source={{
          uri: `${process.env.API_URL}/images/${product.store}/products/${product.images[0]}`,
        }}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    marginBottom: SIZES.sm,
    padding: SIZES.sm,
    borderRadius: SIZES.sm,
    overflow: "hidden",
    borderWidth: 0.2,
    borderColor: COLORS.primaryGray300,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
});
