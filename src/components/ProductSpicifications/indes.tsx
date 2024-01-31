import { StyleSheet, FlatList, View } from "react-native";
import React, { FC } from "react";
import { SpecificationInterface } from "../../features/products/_models";
import ProductSpicification from "./ProductSpicification";
import Title from "../ui/Title";
import { globalStyles } from "../../styles/globalStyles";
import { SIZES } from "../../constants/intex";
import SectionContainer from "../ui/SectionContainer";

const ProductSpicifications: FC<{
  specifications: SpecificationInterface[];
}> = ({ specifications }) => {
  return (
    <SectionContainer>
      <Title style={{ marginTop: SIZES.sm, marginBottom: SIZES.xs }}>
        Product's Specifications
      </Title>
      <FlatList
        data={specifications}
        renderItem={({ item }) => <ProductSpicification spicification={item} />}
      />
      {specifications.map((specification, index) => (
        <ProductSpicification key={index} spicification={specification} />
      ))}
    </SectionContainer>
  );
};

export default ProductSpicifications;
