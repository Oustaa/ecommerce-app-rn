import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { SingleProductInterface } from "../../features/products/_models";
import { COLORS, SIZES } from "../../constants/intex";
import { getProductById } from "../../features/products/_requests";
import { globalStyles } from "../../styles/globalStyles";
import ProductSpicifications from "../../components/ProductSpicifications/indes";

import SingleProductImages from "./SIngleProductImages";
import ProductDescription from "../../components/ProductDescription";

type SingleProductRouteParams = {
  id: string;
};

const SingleProductScreen = () => {
  const route =
    useRoute<RouteProp<Record<string, SingleProductRouteParams>, string>>();

  const { params } = route;
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<SingleProductInterface | null>(null);

  useEffect(() => {
    getProductById({
      productId: params?.id,
      loadingCb: setLoading,
      successCb: setProduct,
    });
  }, []);

  if (loading || !product)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={COLORS.primaryGreen500} />
      </View>
    );

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={styles.productTitle}>{product?.title}</Text>
      <SingleProductImages store={product?.store} images={product?.images} />
      <ProductSpicifications specifications={product.specifications} />
      <ProductDescription description={product.description} />
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
  productTitle: {
    fontSize: SIZES.md,
    fontWeight: "400",
    margin: SIZES.sm,
  },
});
