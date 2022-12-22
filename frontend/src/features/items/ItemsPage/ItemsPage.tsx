import { useSelector } from "react-redux"
import ItemView from "../ItemView/ItemView"
import { selectItems } from "../selectors"

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems)
  console.log(items);
  
  return (
    <div>
    <h1>Товары</h1>

    <div>
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