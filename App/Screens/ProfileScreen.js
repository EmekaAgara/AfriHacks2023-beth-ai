import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";

export default function ProfileScreen() {
  const { isLoaded, signOut } = useAuth();
  const { isSignedIn, user } = useUser();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [focused, setFocused] = useState(false);
  const navigation = useNavigation();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const onLogoutPress = () => {
    navigation.navigate("LoginScreen");
    signOut();
  };
  const handlePress = () => {
    navigation.navigate("ProfileScreen");
  };
  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>My Beth Account</Text>
          {/* <Text style={styles.descText1}>View and edit your profile </Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={{ uri: user?.imageUrl }}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.descText}>Personal Information </Text>

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
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={user.firstName}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={user.lastName}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={user.primaryEmailAddress.emailAddress}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={"Location"}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={"Sex"}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={"BloodGroup"}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={"Genotype"}
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
            borderColor: focused ? "#E53F71" : "#141518",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput
          inputMode="email"
          editable={false}
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={"createdAt"}
          placeholderTextColor="#818589"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={styles.input}
        />
      </View>
      <CustomButton text="Logout" onPress={onLogoutPress} />
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
    fontSize: 16,
    padding: 15,
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
    // justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 80,
    padding: 6,
    paddingHorizontal: 15,
    height: "100%",
  },

  HelloText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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
