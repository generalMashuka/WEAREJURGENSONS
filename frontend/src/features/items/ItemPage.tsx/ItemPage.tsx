import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectItems, selectLoaderror } from "../selectors";

import Item from "../types/Item";
import styles from "./itemPage.module.css";


function ItemPage(): JSX.Element {
  const { id } = useParams();
  const items = useSelector(selectItems);
  // const loadError = useSelector(selectLoaderror);
 const itemsArr = [...items.filter((item) => item.id === Number(id))];
 const item = itemsArr[0];
 
 
  

  return (
    <div className={styles.card}>
      <div className={styles.pic}>
        {/* <h2 className={styles.name}>{item.name}</h2> */}
        <div className={styles.name}>
          <h4>{item.description}</h4>
          <h5>{item.name}</h5>
          <p>{item.price}</p>
          <button className={styles.buyButton} >купить</button>
        </div>
        <img src={item.img} className="card-img" alt="..." />
      </div>
    </div>
  );
}

export default ItemPage;
