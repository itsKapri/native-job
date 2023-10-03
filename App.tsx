import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/Home";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS, images, icons, SIZES } from "./constants";
import ScreenHeaderBtn from "./src/Components/header/ScreenBtn";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite , },
              headerShadowVisible:false,

              headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%r" />
              )
            }}
            name="home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
