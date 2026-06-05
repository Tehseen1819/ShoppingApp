import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartCard = ({ product }) => {
  function decrease() {
    if (counter === 1) {
      return;
    } else {
      setCounter((counter) => counter - 1);
    }
  }
  function increase() {
    setCounter((counter) => counter + 1);
  }
  const [counter, setCounter] = useState(1);
  return (
    <View style={styles.card}>
      <Image
        style={styles.productImage}
        source={{
          uri: product.image,
        }}
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <View style={styles.counterButton}>
        <TouchableOpacity onPress={decrease}>
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
        <TouchableOpacity onPress={increase}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    flexDirection: "row",
    backgroundColor: "#b3a8a8",
    justifyContent: "space-around",
    alignItems: "center",
    width: 140,
    borderRadius: 50,
    padding: 8,
  },
});
