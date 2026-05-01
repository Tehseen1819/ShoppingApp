import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Components/Card";
export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor:"white"
  },
});
