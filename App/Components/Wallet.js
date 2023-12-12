import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import Lottie from "lottie-react-native";
import { ImageBackground } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";

const data = [
  {
    id: "1",
    title: "₦500,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    name: `hello`,
    backgroundImage: require("../assets/card9.png"),
    screen: "Development",
  },

  {
    id: "2",
    title: "₦100,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card7.png"),
    screen: "Development",
  },
  {
    id: "3",
    title: "₦300,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card11.png"),
    screen: "Development",
  },

  {
    id: "4",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card4.png"),
    screen: "Development",
  },
];
const CardData = [
  {
    id: "3",
    image: require("../assets/trade.json"),
    description: "Deposit",
    screen: "Development",
  },
  {
    id: "4",
    image: require("../assets/transfer.json"),
    description: "Transfer",
    screen: "Development",
  },
  {
    id: "5",
    image: require("../assets/ben.json"),
    description: "Specialists",
    screen: "Development",
  },
  {
    id: "6",
    image: require("../assets/qr.json"),
    description: "QR Code",
    screen: "Development",
  },
];

const Wallet = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ProfileScreen");
  };

  const { isLoaded, signOut } = useAuth();
  const { isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>My Wallet</Text>
          <Text style={styles.descText1}>Manage your wallet Balances </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={{ uri: user?.imageUrl }}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <ImageBackground
              source={item.backgroundImage}
              style={styles.ButtonContainer}
            >
              <View style={styles.profileContainer}>
                <Text style={styles.descText}>{item.description}</Text>
                <Text style={styles.mainText}>{item.title}</Text>
                <Text style={styles.acctText}>{item.account}</Text>
                <Text style={styles.nameText}>{user.fullName}</Text>
              </View>
              <View style={styles.profileContainer}>
                <Image
                  source={require("../assets/Chips.png")}
                  style={styles.chipimg}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.descText2}>Explore 🚀</Text>
      <FlatList
        horizontal
        pagingEnabled
        data={CardData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={styles.ServicesContainer}
          >
            <View style={styles.profileContainer}>
              <View>
                <Lottie
                  source={item.image}
                  autoPlay
                  loop
                  style={styles.serviceImg}
                />
              </View>
              <Text style={styles.serviceText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.descText2}>Recent Transactions</Text>
      {/* 
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      /> */}
    </View>
  );
};

export default Wallet;

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
    borderRadius: 40,
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
    paddingTop: 120,
    padding: 6,
    paddingHorizontal: 15,
  },

  HelloText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "left",
    paddingBottom: 10,
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
  },

  ServicesContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 9,
    marginBottom: 16,
    marginRight: 12,
    paddingRight: 20,

    borderRadius: 6,
  },
  serviceImg: {
    height: 55,
    width: 35,
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
