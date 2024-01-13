import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "../../styles/globalStyles";
import LatestProducts from "./latestProducts";
import ShopByCategory from "./ShopByCategory";

const HomeScreen = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <ShopByCategory />
      <LatestProducts />
    </View>
  );
};

export default HomeScreen;
