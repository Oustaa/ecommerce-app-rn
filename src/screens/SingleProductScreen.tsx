import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import { SingleProductInterface } from "../features/products/_models";
import { COLORS } from "../constants/intex";
import { getProductById } from "../features/products/_requests";

const SingleProductScreen = () => {
  const { params } = useRoute();

  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<SingleProductInterface | null>(null);

  useEffect(() => {
    getProductById({
      productId: params?.id,
      loadingCb: setLoading,
      successCb: setProduct,
    });
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={COLORS.primaryGreen500} />
      </View>
    );

  return (
    <View>
      <Text>{product?.title}</Text>
      <Image
        source={{
          uri: `${process.env.API_URL}/images/${product?.store}/products/${product?.images[0]}`,
        }}
        style={styles.productImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: 400,
  },
});
