import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";

export default function LoginScreen() {
  const [indicator, setIndicator] = useState(false);
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSignupPressed = () => {
    navigation.navigate("SignupScreen");
  };

  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const onSignInPress = async () => {
    setIndicator(!indicator);
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      // Check if the error has an 'errors' array
      if (err.errors && err.errors.length > 0) {
        // Access the first error message in the array
        const errorMessage = err.errors[0].message;
        Alert.alert(
          "Ooops 😩",
          errorMessage || "Something went wrong please try again"
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="small" color="gray" animating={indicator} />

      <View style={styles.root}>
        <Image
          // source={require("../assets/karah.png")}
          source={require("../assets/bethl.png")}
          style={[styles.logo, { height: height * 0.2 }]}
        />
        <Text style={styles.title}>Login to your account</Text>

        <View
          style={[
            styles.InputContainer,
            {
              borderColor: focused ? "#E53F71" : "#141518",
              borderWidth: 1,
            },
          ]}
        >
          <TextInput
            inputMode="email"
            value={emailAddress}
            onChangeText={setEmailAddress}
            placeholder={"Email address"}
            placeholderTextColor="#818589"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={styles.input}
          />
        </View>

        <View
          style={[
            styles.InputContainer,
            {
              borderColor: focusedPassword ? "#E53F71" : "#141518",
              borderWidth: 1,
            },
          ]}
        >
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            placeholderTextColor="#818589"
            style={styles.input}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            secureTextEntry
          />
        </View>

        <CustomButton text="Login" onPress={onSignInPress} />
        <CustomButton
          text="Have an account? Sign up"
          onPress={onSignupPressed}
          type="tertiary"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#141518",
    width: "100%",
    // borderColor: "#899",
    borderWidth: 0.1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
    borderWidth: 1,
  },
  input: {
    color: "#818589",
    width: "100%",
  },
  container: {
    backgroundColor: "#080808",
  },

  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: "40%",
    backgroundColor: "#080808",
    height: "100%",
  },

  logo: {
    width: "70%",
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 10,
    resizeMode: "cover",
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
    alignSelf: "flex-start",
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#4765A9",
  },
});
