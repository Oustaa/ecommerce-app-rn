import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/intex";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={COLORS.primaryGreen500} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
