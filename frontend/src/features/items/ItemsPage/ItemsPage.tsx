import { useSelector } from "react-redux"
import ItemView from "../ItemView/ItemView"
import { selectItems } from "../selectors"
import styles from "./styles.module.css"

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems)
  
  return (
    <div>

    <div className={styles.cards}>
      {items.map((item) => (
        <ItemView
          key={item.id}
          item={item}
        />
      ))}
    </div>
  </div>
  )
};

export default ItemsPage