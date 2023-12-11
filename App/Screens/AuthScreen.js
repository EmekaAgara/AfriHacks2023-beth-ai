import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../Navigations/TabNavigation";
import ProfileScreen from "./ProfileScreen";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <SignedIn>
        <HomeScreen />
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
