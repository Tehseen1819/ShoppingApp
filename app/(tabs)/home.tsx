import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Components/Card";

const data = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "T-Wool Blazer",
    price: "$560.00",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517472292914-9570a594783b?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Plated Silk midi",
    price: "$580.00",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shirt",
    price: "$960.00",
  },
];
export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card product={item} />}
      />
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
