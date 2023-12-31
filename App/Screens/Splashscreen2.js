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

const SplashScreen2 = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate("SplashScreen1");
  };

  const onGetStartedPress = () => {
    navigation.navigate("AuthScreen");
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        // source={{
        //   uri: "https://emekaagara.com/wp-content/uploads/2023/04/pexels-cottonbro-studio-4008365-1080x2048-50fps.mp4",
        // }}
        source={require("../assets/meds.mp4")}
        shouldPlay
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      <Text style={styles.mainText}>Search Healthcare Specialists</Text>
      <Text style={styles.subText}>
        Manage your medical history and track medical expenses with Beth AI
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

export default SplashScreen2;

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

  // ButtonContainer: {
  //   position: "absolute",
  //   backgroundColor: "#E53F71",
  //   bottom: 35,
  //   width: "90%",
  //   alignSelf: "center",
  //   padding: 25,
  //   borderRadius: 10,
  //   alignItems: "center",
  // },

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
