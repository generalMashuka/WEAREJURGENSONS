import Item from './Item';

type ItemsState = {
  items: Item[];
  loadError?: string;
};

export default ItemsState;
