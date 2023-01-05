import { RootState } from "../../store";
import Item from "./types/Item";

export const selectItems = (state: RootState): Item[] => state.items.items;
export const selectLoaderror = (state: RootState): string | undefined =>
  state.items.loadError;