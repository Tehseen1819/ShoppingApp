import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "../Components/CartCard";

export default function bag() {
  return (
    <SafeAreaView style={styles.container}>
      <CartCard />
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
