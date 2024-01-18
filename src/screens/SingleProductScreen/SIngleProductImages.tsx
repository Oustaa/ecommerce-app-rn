import { Image, StyleSheet, FlatList, View, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { COLORS, SIZES } from "../../constants/intex";

interface SingleProductImagesProps {
  images: string[];
  store: string;
}

const SingleProductImages: FC<SingleProductImagesProps> = ({
  images,
  store,
}) => {
  const [displayedImage, setDisplayedImage] = useState<string>(images[0]);

  return (
    <View>
      <View
        style={[styles.productImageContainer, { marginHorizontal: SIZES.sm }]}
      >
        <Image
          source={{
            uri: `${process.env.API_URL}/images/${store}/products/${displayedImage}`,
          }}
          style={[styles.productImage]}
          resizeMode="contain"
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.productSmallThumbnailContainer}
        horizontal={true}
        data={images}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => setDisplayedImage(item)}
              style={[styles.productImageContainer, { width: 80, height: 80 }]}
            >
              <Image
                source={{
                  uri: `${process.env.API_URL}/images/${store}/products/${item}`,
                }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </Pressable>
          );
        }}
        contentContainerStyle={{ gap: SIZES.sm }}
      />
    </View>
  );
};

export default SingleProductImages;

const styles = StyleSheet.create({
  productImageContainer: {
    // flex: 1,
    height: 250,
    borderWidth: 0.2,
    borderRadius: SIZES.xs,
    borderColor: COLORS.primaryGray300,
    padding: SIZES.sm,
    marginBottom: SIZES.sm,
    // marginHorizontal: SIZES.sm,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productSmallThumbnailContainer: {
    // flex: 1,
    paddingHorizontal: SIZES.sm,
  },
});
