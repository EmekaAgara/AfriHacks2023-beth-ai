import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { isLoaded, signOut } = useAuth();
  const { isSignedIn, user } = useUser();
  const navigation = useNavigation();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const onSignInPress = () => {
    navigation.navigate("LoginScreen");
    signOut();
  };
  return (
    <SafeAreaView>
      <Text>
        ProfileScreen {user.firstName} {user.lastName}{" "}
      </Text>
      <Button
        title="Sign Out"
        onPress={() => {
          onSignInPress();
        }}
      />
    </SafeAreaView>
  );
}
