import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import Category from "./Category";
import { SIZES } from "../../constants/intex";
import Title from "../ui/Title";

const categories = [
  {
    _id: "64551d611e8c8ddc4b017a00",
    name: "Toys and Games",
    subCategories: [
      {
        name: "Board Games",
        specifications: [
          "Brand",
          "Material",
          "Theme",
          "Genre",
          "Number of Players",
        ],
      },
      {
        name: "Outdoor Play Equipment",
        specifications: [
          "Brand",
          "Color",
          "Material",
          "Item Dimensions LxWxH",
          "Maximum Weight Recommendation",
          "Age Range (Description)",
          "Shape",
        ],
      },
      {
        name: "Building Sets and Blocks",
        specifications: [
          "Brand",
          "Manufacturer Minimum Age (MONTHS)",
          "Number of Pieces",
          "Cartoon Character",
          "Educational Objective",
          "Material",
          "Year",
          "Model Name",
          "color",
          "Theme",
        ],
      },
      {
        name: "Dolls and Accessories",
        specifications: [
          "Brand",
          "Theme",
          "Toy figure type",
          "Color",
          "Material",
          "Age Range (Description)",
          "Item Dimensions LxWxH",
        ],
      },
      {
        name: "Video Games and Consoles",
        specifications: [
          "Brand",
          "Color",
          "Theme",
          "Number of Players",
          "Item Dimensions LxWxH",
          "Controller Type",
          "Memory Storage Capacity",
          "Hardware Interface",
          "Special Feature",
          "Connectivity Technology",
        ],
      },
      {
        name: "Educational Toys",
        specifications: [
          "Brand",
          "Manufacturer Minimum Age (MONTHS)",
          "Material",
          "Educational Objective",
          "Number of Pieces",
          "Theme",
          "Sub Brand",
          "Model Name",
          "Item Dimensions LxWxH",
          "Age Range (Description)",
        ],
      },
    ],
    image: "toys-and-games.jpg",
  },
  {
    _id: "64551d611e8c8ddc4b017a01",
    name: "Electronics",
    subCategories: [
      {
        name: "Computers and Accessories",
        specifications: [
          "Brand",
          "Specific Uses For Product",
          "Personal computer design type",
          "Operating System",
          "Memory Storage Capacity",
          "Screen Size",
          "Ram Memory Installed Size",
          "Series",
          "Included Components",
          "CPU Model",
          "Color",
          "Graphics Coprocessor",
          "Card Description",
        ],
      },
      {
        name: "Smartphones and Accessories",
        specifications: [
          "Brand",
          "Model Name",
          "Wireless Carrier",
          "Operating System",
          "Cellular Technology",
          "Memory Storage Capacity",
          "Connectivity Technology",
          "Color",
          "Screen Size",
          "Wireless network technology",
        ],
      },
      {
        name: "Gaming Accessories",
        specifications: [
          "Brand",
          "Compatible Devices",
          "Connectivity Technology",
          "Keyboard Description",
          "Special Feature",
          "Color",
          "Number of Keys",
          "Style",
          "Material",
          "Included Components",
          "Shape",
          "Light Source Type",
          "Shade Material",
          "Special Feature",
          "Recommended Uses For Product",
          "Connector Type",
          "Supported Internet Services",
          "Controller Type",
          "Form Factor",
          "Model Name",
          "Item Weight",
          "Item Dimensions LxWxH",
        ],
      },
      {
        name: "Wearable Technology",
        specifications: [
          "Brand",
          "Style",
          "Color",
          "Screen Size",
          "Special Feature",
          "Shape",
          "Target Audience",
          "Age Range (Description)",
          "Compatible Devices",
          "Compatible Phone Models",
          "Model Name",
          "Age Range (Description)",
          "Connectivity Technology",
          "Number of Buttons",
        ],
      },
    ],
    image: "electronics.jpeg",
  },
  {
    _id: "64551d611e8c8ddc4b017a02",
    name: "Clothing and Fashion",
    subCategories: [
      {
        name: "Women's Clothing",
      },
      {
        name: "Men's Clothing",
      },
      {
        name: "Children's Clothing",
      },
      {
        name: "Footwear",
      },
      {
        name: "Swimwear",
      },
    ],
    image: "clothing-and-fashion.jpg",
  },
  {
    _id: "64551d611e8c8ddc4b017a03",
    name: "Home And Garden",
    subCategories: [
      {
        name: "Furniture",
        specifications: [
          "Brand",
          "Item Dimensions LxWxH",
          "Color",
          "Style",
          "Room Type",
          "Type",
          "Seating Capacity",
          "Shape",
          "Arm Style",
          "Pattern",
          "Table design",
          "Size",
          "Special Feature",
          "Item Firmness",
          "Age Range (Description)",
          "Model Name",
          "Special Feature",
          "Material",
        ],
      },
      {
        name: "Lighting",
        specifications: [
          "Brand",
          "Material",
          "Style",
          "Light fixture form",
          "Room Type",
          "Light Type",
          "Special Feature",
          "Wattage",
          "Bulb Shape Size",
          "Item Dimensions LxWxH",
          "Light Source Type",
        ],
      },
      {
        name: "Garden and Outdoor",
        specifications: [
          "Brand",
          "Power Source",
          "Voltage",
          "Form Factor",
          "Special Feature",
          "Room Type",
          "Included Components",
          "Item Weight",
          "Material",
          "Model Name",
          "Style",
          "Light fixture form",
          "Planter Form",
        ],
      },
      {
        name: "Pet Supplies",
        specifications: [
          "Brand",
          "Color",
          "Material",
          "Material Feature",
          "Capacity",
          "Auto Part Position",
          "Target Species",
          "Special Feature",
          "Breed Recommendation",
        ],
      },
    ],
    image: "home-and-garden.jpg",
  },
  {
    _id: "64551d611e8c8ddc4b017a04",
    name: "Beauty and Persoanl Care",
    subCategories: [
      {
        name: "Skincare",
        specifications: [
          "Brand",
          "Item Form",
          "Unit Count",
          "Number of Items",
          "Use for",
          "Active Ingredients",
          "Item Weight",
          "Color",
          "Product Benefits",
          "Material Type Free",
          "Scent",
          "Product Benefits",
          "Item Form",
        ],
      },
      {
        name: "Makeup",
        specifications: [
          "Brand",
          "Product Benefits",
          "Special Feature",
          "Item Form",
          "Color",
          "Skin Type",
          "Item Form",
          "Finish Type",
          "Scent",
          "Material Feature\t",
        ],
      },
      {
        name: "Haircare",
        specifications: [
          "Brand",
          "Item Form",
          "Hair Type",
          "Product Benefits",
          "Age Range (Description)",
          "Scent",
          "Active Ingredients",
          "Liquid Volume",
          "Material Feature",
          "Hair Type",
        ],
      },
      {
        name: "Fragrance",
        specifications: [
          "Brand",
          "Item Form",
          "Color",
          "Skin Type",
          "Recommended Uses For Product",
          "Material Type Free",
          "Item Volume",
          "Fragrance Concentration",
        ],
      },
    ],
    image: "beauty-and-persoanl-care.jpg",
  },
  {
    _id: "64551d611e8c8ddc4b017a05",
    name: "Sport and Outdoors",
    subCategories: [
      {
        name: "Sporting Goods",
        specifications: [
          "Brand",
          "Use for",
          "Material",
          "Color",
          "Item Dimensions LxWxH",
          "Sport Type",
          "Age Range (Description)",
          "Item Weight",
        ],
      },
      {
        name: "Fitness",
        specifications: [
          "Brand",
          "Size",
          "Material",
          "Strap Type",
          "Use for",
          "Power Source",
          "Item Weight",
          "Color",
          "Target Audience",
          "Special Feature",
          "Handle Material",
        ],
      },
      {
        name: "Camping and Hiking",
        specifications: [
          "Brand",
          "Special Feature",
          "Color",
          "Power Source",
          "Light Source Type",
          "Material",
          "Style",
          "Occupancy",
          "Design",
          "Recommended Uses For Product",
          "Seasons",
          "Item Dimensions LxWxH",
          "Sport Type",
        ],
      },
      {
        name: "Team Sports",
        specifications: [
          "Brand",
          "Size",
          "Grip Size",
          "Sport Type",
          "Material",
          "Skill Level",
          "Frame Material",
          "Shaft Material",
          "Age Range (Description)",
        ],
      },
    ],
    image: "sport-and-outdoors.jpg",
  },
];

const CategoriesContainer = () => {
  return (
    <View style={styles.containerContainer}>
      <Title>Shop by category</Title>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Category category={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: SIZES.md }}
      />
    </View>
  );
};

export default CategoriesContainer;

const styles = StyleSheet.create({
  containerContainer: {
    padding: SIZES.sm,
  },
});
