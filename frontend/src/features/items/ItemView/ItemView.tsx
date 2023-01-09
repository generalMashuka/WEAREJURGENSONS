import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Item, { ItemId } from "../types/Item";
import styles from "./styles.module.css";
import { selectUser } from "../../auth/selectors";

type ItemProps = {
  item: Item;
  onRemove: (itemId: ItemId) => void;
};

function ItemView({ item, onRemove  }: ItemProps): JSX.Element {
  // const navigate = useNavigate();
  // const handleItemPageClick = (): void => {
  //   navigate(`/items/${item.id}`);
  // };
  const user = useSelector(selectUser)

  const handleRemove = (event: React.MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    onRemove(item.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.pic}>
        {/* <h2 className={styles.name}>{item.name}</h2> */}
        <div className={styles.name}>
          <Link to={`/items/${item.id}`} style={{ fontSize: "24px" }}>
            {item.description}
          </Link>
          {/* <p>{item.price}</p> */}
          {/* <button className={styles.buyButton} >купить</button> */}
        </div>
        <img src={item.img} className={styles.img} alt="..." />
        <div className={styles.btnBox}>
        <button type="button" onClick={handleRemove} className={styles.btn}>Удалить</button>
          <button type="button"  className={styles.btn}>Редактировать</button>
        </div>
      </div>
    </div>
  );
}

export default ItemView;
