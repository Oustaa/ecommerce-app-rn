import "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import store from "./src/store";

import HomeScreen from "./src/screens/Home/HomeScreen";
import { COLORS, SIZES } from "./src/constants/intex";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              // cardStyle: {
              //   backgroundColor: "white",
              // },
              headerStyle: {
                backgroundColor: COLORS.primaryGray500,
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "100",
              },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="home_screen"
              options={{
                title: "",
                headerRight: ({ tintColor }) => (
                  <Feather name="shopping-cart" size={24} color={tintColor} />
                ),
              }}
              component={HomeScreen}
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
