import Foundation from "@expo/vector-icons/Foundation";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const card = () => {
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
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image style={styles.productImage} source={{ uri: item.image }} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={styles.buttonCartAndWishlist}>
            <TouchableOpacity style={styles.moveToCartButtonContainer}>
              <Text style={styles.moveToCardButton}>Move to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moveToWishList}>
              <Foundation name="heart" color={"#B80041"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    height: 390,
    width: "100%",
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 20,
  },
  productPrice: {
    marginBottom: 10,
    color: "#B80041",
    fontWeight: "600",
    fontSize: 20,
  },
  buttonCartAndWishlist: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  moveToCartButtonContainer: {
    padding: 10,
    backgroundColor: "#B80041",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 50,
    color: "white",
  },
  moveToCardButton: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,
  },
  moveToWishList: {
    color: "#B80041",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "white",
  },
});
