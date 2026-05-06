import Foundation from "@expo/vector-icons/Foundation";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const card = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <View style={styles.buttonCartAndWishlist}>
        <TouchableOpacity style={styles.moveToCartButtonContainer}>
          <Text style={styles.moveToCardButton}>Move to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moveToWishList}>
          <Foundation name="heart" color={"#B80041"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
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
