import Item from "../types/Item";

type ItemProps = {
  item: Item;
}


function ItemView({item}:ItemProps):JSX.Element {
  return (
    <div>
          <div style={{ marginBottom: 10 }}>
          <h2>{item.name}</h2>
          <h3>{item.description}</h3>
          <img src={item.img} className="card-img" alt="..." />
          <div>{item.price}</div>
        </div>
    </div>
  )
}

export default ItemView;