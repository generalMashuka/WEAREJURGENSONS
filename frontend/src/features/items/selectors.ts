import { RootState } from "../../store";
import CartItem from "../cart/types/CartItem";
import Item from "./types/Item";

export const selectItems = (state: RootState): Item[] => state.items.items;
export const selectLoaderror = (state: RootState): string | undefined =>
  state.items.loadError;
export const selectCartItems = (state: RootState): CartItem[] => state.cart.cart;