import { useSelector } from "react-redux";
import ItemView from "../ItemView/ItemView";
import { selectItems, selectLoaderror } from "../selectors";
// import styles from "./styles.module.css";
import * as api from '../api';
import Item, { ItemId } from "../types/Item";
import { useAppDispatch } from "../../../store";
import { useParams } from "react-router-dom";

function SortedItems(): JSX.Element {
  const items = useSelector(selectItems);
  const { id } = useParams();
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();

const sortedItems = items.filter((i) => i.category_id === Number(id));

  return (
    <div>
      <div>
        {loadError ? (
          <b>{loadError}</b>
        ) : (
          sortedItems.map((item) => <ItemView 
          key={item.id} 
          item={item}
          />)
        )}
      </div>
    </div>
  );
}

export default SortedItems;
