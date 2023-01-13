import { useSelector } from "react-redux";
import { selectOrders, selectLoaderror } from "../selectors";
import styles from "./orders.module.css";
import * as api from "../api";
import Order, { OrderId } from "../types/Order";
import { loadOrders, orderDeleted, orderUpdated } from "../ordersSlice";
import { useAppDispatch } from "../../../store";
import { useEffect } from "react";
import OrderView from "./orderview/OrderView";

function OrdersView(): JSX.Element {
  const orders = useSelector(selectOrders);
  // const orders = ordersObj.orders;
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();

  console.log(orders);

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  const handleOrderRemove = (id: OrderId): void => {
    dispatch(orderDeleted(id));
  };
  const handleOrderUpdate = (order: Order): void => {
    dispatch(orderUpdated(order));
  };

  return (
    <div>
      <div>
        {/* <caption>Заказы</caption> */}
        {/* <div>
          <div className={styles.text}>Номер заказа</div>
          <div>Товары и их количество</div>
          <div>Контактные данные покупателя</div>
          <div>Статус заказа</div>
          <div>Дата оформления заказа</div>
        </div> */}
        <div className={styles.right}>
          {orders?.map((order) => (
            <OrderView
              order={order}
              onRemove={handleOrderRemove}
              onUpdate={handleOrderUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersView;
