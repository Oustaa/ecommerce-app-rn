import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getImgUrl } from "../../utils/imageConstructor";

const product = {
  _id: "645e74478f43e3fa7ad31390",
  title:
    "Latest and Improved! GlassOuse V1.4 Wireless Bluetooth Wearable Hands Free Mouse for Gamers, People with Disabilities & Others!!!",
  price: 589.77,
  currency: "USD",
  images: [
    "1683911751952.jpg",
    "1683911751955.jpg",
    "1683911751956.jpg",
    "1683911751956.jpg",
    "1683911751957.jpg",
  ],
  store: "GlassOuse",
};

const ProductCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: getImgUrl(`${product.store}/products/${product.images[0]}`),
        }}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
});
