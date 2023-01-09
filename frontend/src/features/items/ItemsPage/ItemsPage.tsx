import { useSelector, useDispatch } from "react-redux";
import ItemView from "../ItemView/ItemView";
import { selectItems, selectLoaderror } from "../selectors";
import styles from "./styles.module.css";
import * as api from '../api';
import { ItemId } from "../types/Item";
import { itemDeleted } from "../itemsSlice";
import { useAppDispatch } from "../../../store";

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems);
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();

  const handleItemRemove = (id: ItemId): void => {
    // api.deleteItem(id).then(() => {
      dispatch(itemDeleted(id));
    // });
  };

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
          />)
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
