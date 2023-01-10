import Item from './Item';

type ItemsState = {
  items: Item[];
  loadError?: string;
  createError?: string;
};

export default ItemsState;
