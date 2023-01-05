import { Link, useNavigate } from "react-router-dom";

import Item from "../types/Item";
import styles from "./styles.module.css";

type ItemProps = {
  item: Item;
};

function ItemView({ item }: ItemProps): JSX.Element {
  // const navigate = useNavigate();
  // const handleItemPageClick = (): void => {
  //   navigate(`/items/${item.id}`);
  // };

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
        <img src={item.img} className="card-img" alt="..." />
      </div>
    </div>
  );
}

export default ItemView;
