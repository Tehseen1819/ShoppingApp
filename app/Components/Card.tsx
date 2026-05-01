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
      name: "T-shirt",
      price: 10,
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shirt",
      price: 10,
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image style={styles.productImage} source={{ uri: item.image }} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>Price :{item.price}</Text>
          <View style={styles.buttonCartAndWishlist}>
            <TouchableOpacity style={styles.MoveToCartButton}>
              <Text>Move to Cart</Text>
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
    height: "80%",
    width: "100%",
    padding: 45,
    marginBottom: 40,
    borderWidth: 2,
  },
  productImage: {
    height: 300,
    width: "100%",
    borderRadius: 10,
  },
  itemName: {
    marginTop: 5,
    marginBottom: 10,
  },
  price: {},
  buttonCartAndWishlist: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MoveToCartButton: {
    padding: 10,
    backgroundColor: "#B80041",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
    marginRight: 10,
  },
  moveToWishList: {
    color: "#B80041",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    borderRadius: "30%",
    borderWidth:1,
    // backgroundColor: "white",
  },
});
