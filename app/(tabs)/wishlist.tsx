import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CrartCard from "../Components/CrartCard";

export default function wishlist() {
  return (
    <SafeAreaView style={styles.container}>
      <CrartCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f6f7",
  },
});
