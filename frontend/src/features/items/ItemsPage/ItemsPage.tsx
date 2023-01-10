import { useSelector } from "react-redux";
import ItemView from "../ItemView/ItemView";
import { selectItems, selectLoaderror } from "../selectors";
import styles from "./styles.module.css";
import * as api from '../api';
import Item, { ItemId } from "../types/Item";
import { itemDeleted, itemUpdated, loadItems } from "../itemsSlice";
import { useAppDispatch } from "../../../store";

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems);
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();

  const handleItemRemove = (id: ItemId): void => {
      dispatch(itemDeleted(id));
  };

  const handleItemUpdate = (item: Item): void => {
    dispatch(itemUpdated(item))
  }

  return (
    <div>
      <div className={styles.cards}>
        {loadError ? (
          <b>{loadError}</b>
        ) : (
          items.map((item) => <ItemView 
          key={item.id} 
          item={item}
          onRemove={handleItemRemove}
          onUpdate={handleItemUpdate}
          />)
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
