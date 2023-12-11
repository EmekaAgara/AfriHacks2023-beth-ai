import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Beth from "../Components/Beth";

export default function MyCourse() {
  return (
    <View style={styles.container}>
      <Beth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "#000000",
  },
});
