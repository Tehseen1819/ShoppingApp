import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BagCard from "../Components/BagCard";

export default function bag() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BagCard />
        <BagCard />
        <BagCard />
      </ScrollView>
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
