// store/productStore.ts
import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  oldPrice: number;
};

type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],   // starts empty
  setProducts: (products) => set({ products }),
}));
