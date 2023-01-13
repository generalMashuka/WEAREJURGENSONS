import Order, { OrderId } from "../../types/Order";
import React from "react";
import styles from "../orders.module.css";


type OrderProps = {
  order: Order;
  onRemove?: (itemId: OrderId) => void;
  onUpdate?: (newItem: Order) => void;
};

function OrderView({ order, onRemove, onUpdate }: OrderProps): JSX.Element {
  const [edit, setEdit] = React.useState(false);
  const [status, setStatus] = React.useState(order.status);

  const handleRemove = (event: React.MouseEvent): void => {

    console.log(order.id);
    
  
    if (onRemove) {
      onRemove(order.id);
    }
  };

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStatus(event.target.value);
  };
  // const handleEditClick = (event: React.MouseEvent): void => {
  //   if (edit) {
  //     const newItem: Item = {
  //       ...item,
  //       name,
  //       price,
  //       img,
  //       description,
  //       category_id,
  //     };
  //     if (onUpdate) {
  //       onUpdate(newItem);
  //     }
  //     setEdit(false);
  //   } else {
  //     setEdit(true);
  //   }
  // };
console.log(order);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.box}>
        <div className={styles.text}> Номер заказа : {order.id}</div>
        <div className={styles.text}> Товары и их количество{ ' : '}
          {order.OrderItems.map(
            (orderItem) =>
              `${orderItem.Item.name} - ${orderItem.quantity} шт., `
          )}
        </div>
        <div className={styles.text}>Контактные данные покупателя : {order.contact}</div>
        <div className={styles.text}>
        Статус заказа: {order.status}
          
        </div>
        <div className={styles.text}>Дата оформления заказа : {order.createdAt.slice(0, 10)}</div>
        <div className={styles.btnBox}>
          <button className={styles.btn} type="button" onClick={handleRemove}>удалить</button>
        </div>
      </div>
    </div>
  );
}

export default OrderView;
