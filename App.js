import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from "./App/Screens/LoginScreen";
import SignupScreen from "./App/Screens/SignupScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import SplashScreen1 from "./App/Screens/Splashscreen1";
import SplashScreen2 from "./App/Screens/Splashscreen2";
import AuthScreen from "./App/Screens/AuthScreen";
import * as SecureStore from "expo-secure-store";
import ProfileScreen from "./App/Screens/ProfileScreen";
import BethScreen from "./App/Screens/BethScreen";
import Development from "./App/Screens/Development";

export default function App() {
  const Stack = createStackNavigator();

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={"pk_test_c2FmZS1nYXRvci03MS5jbGVyay5hY2NvdW50cy5kZXYk"}
    >
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="SplashScreen2"
              component={SplashScreen2}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="BethScreen"
              component={BethScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Development"
              component={Development}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
