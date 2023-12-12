import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";
import Lottie from "lottie-react-native";
import Features from "../Components/Features";

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();
  const { isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const [emailAddress, setEmailAddress] = React.useState("");
  const [focused, setFocused] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>
            Hello {user.firstName} {user.lastName} 👋
          </Text>
          <Text style={styles.descText1}>How are you Feeling today ? </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={{ uri: user?.imageUrl }}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
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
          placeholder={"Search for a Hospital or Specialist near you"}
          placeholderTextColor="#818589"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={styles.input}
        />
        <TouchableOpacity>
          <Ionicons name="search-circle" size={60} color="#aeaeae" />
        </TouchableOpacity>
      </View>
      <Features />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FlatList: {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
  },
  InputContainer: {
    backgroundColor: "#141518",
    width: "100%",
    // borderColor: "#899",
    borderWidth: 0.1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    // padding: 18,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    color: "#818589",
    width: "82%",
    height: "100%",
    // backgroundColor: "white",

    // fontFamily: "Manrope-ExtraBold",
  },

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnImg: {
    marginLeft: 4,
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 30,
  },

  chipimg: {
    marginLeft: 4,
    height: 70,
    width: 30,
    resizeMode: "contain",
  },

  container: {
    backgroundColor: "#000",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 80,
    padding: 6,
    paddingHorizontal: 15,
  },

  HelloText: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    paddingBottom: 7,
  },

  cardImage: {
    marginLeft: 4,

    height: 70,
    width: 70,
    resizeMode: "contain",
  },

  mainText: {
    color: "white",
    fontSize: 25,
    fontWeight: 700,
    textAlign: "left",
    paddingBottom: 10,
    paddingLeft: 0,
    paddingTop: 20,
  },

  descText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "left",
    paddingLeft: 0,
    paddingBottom: 5,
  },
  acctText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 300,
    textAlign: "left",
    paddingLeft: 0,

    paddingTop: 3,
  },
  nameText: {
    color: "#898A8B",
    fontSize: 11,
    fontWeight: 300,
    textAlign: "left",
    paddingLeft: 0,

    paddingTop: 4,
  },
  descText1: {
    color: "#898A8B",
    fontSize: 13,
    fontWeight: 600,
    textAlign: "left",
    paddingBottom: 20,
    paddingLeft: 0,
  },
  descText2: {
    color: "#898A8B",
    fontSize: 15,
    fontWeight: 400,
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 0,
  },

  ButtonContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 9,
    marginBottom: 16,
    marginRight: 12,
    paddingRight: 23,
    paddingVertical: 20,
    borderRadius: 6,
  },

  CardContainer: {
    backgroundColor: "#5659C6",
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 140,
    marginBottom: 0,
    height: 100,
  },

  profileContainer: {
    flexDirection: "column",
    marginLeft: 0,
    paddingLeft: 16,
    justifyContent: "center",
    // padding: "50",
  },

  serviceText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    paddingLeft: 0,
    paddingBottom: 5,
  },
  ServicesContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 12,
    marginBottom: 16,
    marginRight: 12,
    paddingRight: 20,

    borderRadius: 6,
  },
  serviceImg: {
    height: 55,
    width: 55,
    resizeMode: "contain",
    alignSelf: "center",
  },
  serviceText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    paddingLeft: 0,
    paddingBottom: 5,
  },
});
