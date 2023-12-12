import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Wallet from "../Components/Wallet";

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Wallet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
});
