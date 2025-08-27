import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
};

type WishlistState = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
};

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => {
      // avoid duplicates
      if (state.wishlist.some((item) => item.id === product.id)) {
        return state;
      }
      return { wishlist: [...state.wishlist, product] };
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
  clearWishlist: () => set({ wishlist: [] }),
}));
