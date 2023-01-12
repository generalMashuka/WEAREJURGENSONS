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
  const orderItemsArray = orders.orderItems
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(loadOrders())
  },[dispatch])

  console.log(orderItemsArray);
  return (    
    <div>
        <table>
          <caption>Заказы</caption>
          <tr>
          <th>Номер заказа</th>
          <th>Товары</th>
          <th>Контактные данные покупателя</th>
          <th>Статус заказа</th>
          <th>Дата оформления заказа</th>
          </tr>
          
          {orderItemsArray?.map((orderItem) => (<tr><td>{orderItem.Order.id}</td>
          <td>{orderItem.Item.name}</td><td>{orderItem.Order.contact}</td><td>{orderItem.Order.status}</td><td>{orderItem.Order.createdAt}</td>
          </tr>))}
          
          </table>
    </div>
  );
}

export default OrdersView;
