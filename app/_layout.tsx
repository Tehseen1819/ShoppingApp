import { Stack } from "expo-router";
import { CartProvider } from "./cartContext";
import { WishlistProvider } from "./wishlistContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <WishlistProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </WishlistProvider>
    </CartProvider>
  );
}
