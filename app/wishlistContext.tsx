import { createContext, useState } from "react";

export const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: any) => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
