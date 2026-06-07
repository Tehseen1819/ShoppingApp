import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../cartContext";
import WishlistCard from "../Components/WishlistCard";
import { WishlistContext } from "../wishlistContext";

export default function wishlist() {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);
  const handleMoveToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wishlist}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WishlistCard
            product={item}
            onPressAddToCart={() => handleMoveToCart(item)}
          />
        )}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 300,
            }}
          >
            <Text>Nothing is here</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f6f6f7",
  },
});
