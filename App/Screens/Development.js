import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";
// import CustomButton from "../components/CustomButton";
CustomButton;

const Development = () => {
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSignupPressed = () => {
    navigation.navigate("SignupScreen");
  };

  const onLoginPressed = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Lottie
          source={require("../assets/error.json")}
          autoPlay
          loop
          style={[styles.logo, { height: height * 0.2 }]}
        />
        <Text style={styles.title}>
          Ooops Sorry, this feature is still in Development!!
        </Text>

        <CustomButton text="Go back" onPress={onLoginPressed} />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignupPressed}
          type="tertiary"
        />
      </View>
    </SafeAreaView>
  );
};

export default Development;

const styles = StyleSheet.create({
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
    width: "100%",
    maxWidth: 120,
    maxHeight: 160,
    borderRadius: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    margin: 10,
    alignSelf: "center",
    textAlign: "center",
    paddingBottom: 20,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#4765A9",
  },
});
