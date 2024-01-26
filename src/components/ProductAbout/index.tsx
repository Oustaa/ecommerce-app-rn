import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../ui/Title";
import SectionContainer from "../ui/SectionContainer";
import { COLORS, SIZES } from "../../constants/intex";

const ProductAbouts: React.FC<{ abouts: string[] }> = ({ abouts }) => {
  return (
    <SectionContainer>
      <Title>Abouts</Title>
      <View style={styles.aboutsList}>
        {abouts.map((about, index) => (
          <Text style={styles.aboutListItem} key={index}>
            {about}
          </Text>
        ))}
      </View>
    </SectionContainer>
  );
};

export default ProductAbouts;

const styles = StyleSheet.create({
  aboutsList: {},
  aboutListItem: {
    fontSize: 12,
    marginBottom: SIZES.xs,
    color: COLORS.primaryGray500,
  },
});
