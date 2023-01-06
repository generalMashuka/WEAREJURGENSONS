import { useSelector } from "react-redux";
import ItemView from "../ItemView/ItemView";
import { selectItems, selectLoaderror } from "../selectors";
import styles from "./styles.module.css";

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems);
  const loadError = useSelector(selectLoaderror);

  return (
    <div>
      <div className={styles.cards}>
        {loadError ? (
          <b>{loadError}</b>
        ) : (
          items.map((item) => <ItemView key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
