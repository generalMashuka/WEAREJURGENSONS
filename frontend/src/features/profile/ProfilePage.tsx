import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import ItemView from "../items/ItemView/ItemView";
import { selectItems, selectLoaderror } from '../items/selectors'



function ProfilePage(): JSX.Element {
    const items = useSelector(selectItems);
    const loadError = useSelector(selectLoaderror);

    return (
    <div className={styles.maincontainer}>
    <h1>Профиль администратора</h1>
    <div className={styles.correctItemsBox}>
       <p className={styles.title}>Редактирование товаров</p>
       <div className={styles.cards}>
        {/* {loadError ? (
          <b>{loadError}</b>
        ) : (
          items.map((item) => <ItemView key={item.id} item={item} />)
        )} */}
      </div>
    </div>
    <br />
    <div>
       <p className={styles.title}>Сформированные заказы</p>
    </div>
</div>

    )
}

export default ProfilePage