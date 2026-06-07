import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function wishlistCard({product , onPressAddToCart}) {
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

      <TouchableOpacity style={styles.moveToCartButtonContainer} onPress={onPressAddToCart}>
        <Text style={styles.moveToCardButton}>Move to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    height:500,
  },
  productImage: {
    height: "60%",
    width: "100%",
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 20,
  },
  productPrice: {
    color: "#B80041",
    fontWeight: "600",
    fontSize: 20,
    marginBottom:10
  },

  moveToCartButtonContainer: {
    padding: 15,
    backgroundColor: "#B80041",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 50,
    color: "white",
    
  },
  moveToCardButton: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,

  },
});
