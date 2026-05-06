import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartCard = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.productImage}
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <Text style={styles.productName}>ProductName</Text>
      <Text style={styles.productPrice}>Rs 600</Text>
      <View style={styles.counterButton}>
        <TouchableOpacity>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f6f7",
  },
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
    backgroundColor: "black",
  },
  productName: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 20,
  },
  productPrice: {
    marginBottom: 10,
    fontWeight: "800",
    fontSize: 20,
  },
  counterButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#bb5b5b",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 110,
    borderRadius: 50,
  },
});
