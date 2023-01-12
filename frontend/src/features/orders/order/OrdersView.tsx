import { useSelector } from "react-redux";
import { selectOrders, selectLoaderror } from "../selectors";
import styles from "./orders.module.css";
import * as api from '../api';
import Order, { OrderId  } from "../types/Order";
import { loadOrders, orderDeleted, orderUpdated } from "../ordersSlice";
import { useAppDispatch } from "../../../store";
import { useEffect } from "react";

function OrdersView(): JSX.Element {
  const orders = useSelector(selectOrders);
  const ordersArray = orders.orderItems
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(loadOrders())
  },[dispatch])

  console.log(ordersArray);
  return (    
    <div>
        <table>
          <caption>Заказы</caption>
          <tr>
          <th>Номер заказа</th>
          <th>Товары</th>
          <th>Количество</th>
          <th>Контактные данные покупателя</th>
          <th>Статус заказа</th>
          <th>Дата оформления заказа</th>
          </tr>
          
          {ordersArray?.map((order) => (<tr><td>{order.order_id}</td><td>{order["Item.name"]}</td><td>{order["Order.contact"]}</td><td>{order["Order.status"]}</td><td>{order["Order.createdAt"]}</td></tr>))}
          
          </table>
    </div>
  );
}

export default OrdersView;
