import "react-native-gesture-handler";

import { Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import store from "./src/store";

import HomeScreen from "./src/screens/Home/HomeScreen";
import SingleProductScreen from "./src/screens/SingleProductScreen";
import SubCategoryScreen from "./src/screens/SubCategoryScreen";

import { COLORS, SIZES } from "./src/constants/intex";
import CartScreen from "./src/screens/Cart";
import { FC } from "react";

const Stack = createNativeStackNavigator();

const HeaderRight: FC<{ tintColor: string | undefined }> = ({ tintColor }) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() => {
        console.log("cart_screen");
        navigate("cart_screen");
      }}
    >
      <Feather name="shopping-cart" size={24} color={tintColor} />
    </Pressable>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "none",
              headerStyle: {
                backgroundColor: COLORS.primaryGray500,
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "100",
              },
              headerShadowVisible: false,
              headerRight: ({ tintColor }) => (
                <HeaderRight tintColor={tintColor} />
              ),
            }}
          >
            <Stack.Screen
              name="home_screen"
              options={{
                title: "",
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="single_product_screen"
              options={{
                title: "",
              }}
              component={SingleProductScreen}
            />
            <Stack.Screen
              name="category_screen"
              options={{
                title: "",
              }}
              component={SubCategoryScreen}
            />
            <Stack.Screen
              name="cart_screen"
              options={{
                title: "",
              }}
              component={CartScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
