import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../cartContext";
import BagCard from "../Components/BagCard";

export default function bag() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <BagCard product={item} />}
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
