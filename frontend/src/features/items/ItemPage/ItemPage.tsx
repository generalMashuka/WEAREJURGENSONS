import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectItems } from "../selectors";

import styles from "./itemPage.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";

function ItemPage(): JSX.Element {
  const { id } = useParams();
  const items = useSelector(selectItems);
  // const loadError = useSelector(selectLoaderror);
  const item = items.find((item) => item.id === Number(id));
  const navigate = useNavigate()
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.pic}>
        {/* <h2 className={styles.name}>{item.name}</h2> */}
        <div className={styles.name}>
          <h4>{item!.description}</h4>
          <h5>{item!.name}</h5>
          <p>{item!.price}</p>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  item
                })
              )
            }
            className={styles.buyButton}
          >
            Купить
          </button>
        </div>
        <img src={item!.img} className="card-img" alt="..." />
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default ItemPage;
