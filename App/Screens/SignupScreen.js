import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";

export default function SignupScreen() {
  const [indicator, setIndicator] = useState(false);
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [focused, setFocused] = useState(false);

  const [focusedLname, setFocusedLname] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const onSignInPress = () => {
    navigation.navigate("LoginScreen");
  };

  const onSignupPressed = async () => {
    setIndicator(!indicator);

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
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

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    setIndicator(!indicator);
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
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
    <View>
      {!pendingVerification && (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="small" color="gray" animating={indicator} />
          <View style={styles.root}>
            <Image
              // source={require("../assets/karah.png")}
              source={require("../assets/bethl.png")}
              style={[styles.logo, { height: height * 0.2 }]}
            />
            <Text style={styles.title}>Create an accountt</Text>
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
                value={firstName}
                onChangeText={setFirstName}
                placeholder={"First Name"}
                placeholderTextColor="#818589"
                style={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </View>
            <View
              style={[
                styles.InputContainer,
                {
                  borderColor: focusedLname ? "#E53F71" : "#141518",
                  borderWidth: 1,
                },
              ]}
            >
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder={"Last Name"}
                placeholderTextColor="#818589"
                style={styles.input}
                onFocus={() => setFocusedLname(true)}
                onBlur={() => setFocusedLname(false)}
              />
            </View>
            <View
              style={[
                styles.InputContainer,
                {
                  borderColor: focusedEmail ? "#E53F71" : "#141518",
                  borderWidth: 1,
                },
              ]}
            >
              <TextInput
                inputMode="email"
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholder={"Email Address"}
                placeholderTextColor="#818589"
                style={styles.input}
                onFocus={() => setFocusedEmail(true)}
                onBlur={() => setFocusedEmail(false)}
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
            <CustomButton text="Create Account" onPress={onSignupPressed} />
            <CustomButton
              text="Have an account? Sign in"
              onPress={onSignInPress}
              type="tertiary"
            />
          </View>
        </SafeAreaView>
      )}
      {pendingVerification && (
        <View style={styles.root}>
          <ActivityIndicator size="small" color="gray" animating={indicator} />
          <Image
            // source={require("../assets/karah.png")}
            source={require("../assets/bethl.png")}
            style={[styles.logo, { height: height * 0.2 }]}
          />
          <Text style={styles.title}>Enter Verification Code</Text>

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
              inputMode="numeric"
              value={code}
              onChangeText={setCode}
              placeholder={"Enter Verification Code"}
              placeholderTextColor="#818589"
              style={styles.input}
            />
          </View>

          <CustomButton text="Verify Email" onPress={onPressVerify} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#141518",
    width: "100%",
    // borderColor:'#899',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
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
    paddingTop: "12%",
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
