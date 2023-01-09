import Item, { ItemId } from './types/Item';

export async function loadItems(): Promise<Item[]> {
  
  const response = await fetch('/api/items');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

export async function deleteItem (id: ItemId): Promise<number> {
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE'
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

