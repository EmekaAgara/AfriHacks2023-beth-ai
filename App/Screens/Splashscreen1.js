import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen1 = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate("SplashScreen2");
  };

  const onGetStartedPress = () => {
    navigation.navigate("AuthScreen");
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/beth.mp4")}
        shouldPlay
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      <Text style={styles.mainText}>Beth AI HealthCare</Text>
      <Text style={styles.subText}>
        Get healthcare advice and medical services online from Beth AI
      </Text>

      <TouchableOpacity
        onPress={onGetStartedPress}
        style={styles.ButtonContainer}
      >
        <Text style={styles.ButtonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNextPress} style={styles.ButtonContainer2}>
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  video: {
    flex: 1,
    alignSelf: "stretch",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  ButtonContainer: {
    backgroundColor: "#171515",
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
  },

  ButtonContainer2: {
    backgroundColor: "#7476ED",
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
    alignSelf: "center",
    position: "absolute",
    bottom: 110,
  },

  ButtonText: {
    fontSize: 14,
    color: "#fff",
    // fontWeight: 700,
    alignSelf: "center",
  },

  mainText: {
    color: "white",
    fontSize: 26,
    bottom: 210,
    width: "90%",
    padding: 25,
    paddingBottom: 25,
    position: "absolute",
  },

  subText: {
    color: "white",
    fontSize: 15,
    bottom: 170,
    width: "90%",
    padding: 25,
    paddingBottom: 25,
    position: "absolute",
  },
});
