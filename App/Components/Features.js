import React from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    title: "Ask Beth AI",
    Lottie: require("../assets/Aii.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_2-removebg-preview.png",
    screen: "BethScreen",
  },
  {
    id: "456",
    title: "Specialists Near Me",
    Lottie: require("../assets/docss.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6728_7-removebg-preview-300x185.png",
    screen: "Development",
  },
  {
    id: "789",
    title: "Hospitals Near Me",
    Lottie: require("../assets/Locations.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6733_2-removebg-preview-removebg-preview.png",
    screen: "Development",
  },
  {
    id: "124",
    title: "Emergency Services",
    Lottie: require("../assets/Emergency.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_5-removebg-preview-300x197.png",
    screen: "Development",
  },
  {
    id: "124",
    title: "My Medical Records",
    Lottie: require("../assets/Records.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_5-removebg-preview-300x197.png",
    screen: "Development",
  },
  {
    id: "124",
    title: "My Wallet",
    Lottie: require("../assets/Wallet.json"),
    image:
      "https://emekaagara.com/wp-content/uploads/2022/10/IMG_6727_5-removebg-preview-300x197.png",
    screen: "Development",
  },
];

export default function Features() {
  const navigation = useNavigation();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={2}
      //   horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.container}
        >
          <View>
            <View>
              <Lottie source={item.Lottie} autoPlay loop style={styles.image} />
            </View>

            {/* <Image style={styles.image} source={{ uri: item.image }} /> */}
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 33,
    paddingtop: 4,
    backgroundColor: "#141518",
    margin: 6,
    width: "48%",
    borderRadius: 7,
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 200,
    marginTop: 2,
    alignSelf: "center",
    marginBottom: 5,
  },
});
