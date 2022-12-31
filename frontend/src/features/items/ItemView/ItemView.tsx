import Item from "../types/Item";
import styles from "./styles.module.css";

type ItemProps = {
  item: Item;
}


function ItemView({item}:ItemProps):JSX.Element {
  return (
    <div className={styles.card}>
          <div className={styles.pic}>
          {/* <h2 className={styles.name}>{item.name}</h2> */}
          <div className={styles.name}>{item.description}
          <p>{item.price}</p>
          <button className={styles.buyButton} >купить</button>
          </div>
          <img src={item.img} className="card-img" alt="..." />
          <div>{item.price}</div>
        </div>
    </div>
  )
}

export default ItemView;