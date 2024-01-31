import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import getSymbolFromCurrency from "currency-symbol-map";

import { SingleProductInterface } from "../../features/products/_models";
import { COLORS, SIZES } from "../../constants/intex";
import { getProductById } from "../../features/products/_requests";
import { globalStyles } from "../../styles/globalStyles";
import ProductSpicifications from "../../components/ProductSpicifications/indes";

import SingleProductImages from "./SIngleProductImages";
import ProductDescription from "../../components/ProductDescription";
import ProductAbouts from "../../components/ProductAbout";
import Loader from "../../components/ui/Loader";

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

  if (loading || !product) return <Loader />;

  return (
    <ScrollView
      style={[globalStyles.screenContainer, { paddingBottom: SIZES.lg }]}
    >
      <View style={styles.productHeader}>
        <Text style={styles.productTitle}>{product?.title}</Text>
        <View style={styles.productInfo}>
          <Text>
            {getSymbolFromCurrency(product.currency)}
            {product.price}
          </Text>
          <Text>{product.store}</Text>
          <Text>{product.QandA.length} Answered questions</Text>
        </View>
        <View style={styles.productActions}>
          <Pressable style={styles.productButton}>
            <Text style={styles.productButtonText}>Add to cart</Text>
          </Pressable>
          <Pressable style={styles.productButton}>
            <Text style={styles.productButtonText}>Add to wishlist</Text>
          </Pressable>
        </View>
      </View>
      <SingleProductImages store={product?.store} images={product?.images} />
      {product.description && (
        <ProductDescription description={product.description} />
      )}
      {product.specifications.length ? (
        <ProductSpicifications specifications={product.specifications} />
      ) : null}
      {product.about.length ? <ProductAbouts abouts={product.about} /> : null}
    </ScrollView>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  productHeader: {
    marginHorizontal: SIZES.sm,
    marginVertical: SIZES.md,
    gap: SIZES.xs,
  },
  productTitle: {
    fontSize: SIZES.md,
    fontWeight: "400",
  },
  productInfo: {
    flexDirection: "row",
    gap: SIZES.md,
    alignItems: "center",
  },
  productActions: {
    flexDirection: "row",
    gap: SIZES.md,
    alignItems: "center",
  },
  productButton: {
    flex: 1,
    backgroundColor: COLORS.primaryGreen500,
    padding: SIZES.sm,
    borderRadius: SIZES.xs,
  },
  productButtonText: {
    color: "#FFF",
    textAlign: "center",
  },
});
