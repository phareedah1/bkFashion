import { create } from "zustand";

type Product ={
    id:number;
    name : string;
    price: number;
    oldPrice : number;
    image: string;
    category:string;

};

type CartState = {
  cart: Product[];
  AddToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  AddToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));