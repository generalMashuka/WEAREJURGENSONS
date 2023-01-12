import OrderItem from './OrderItem'
type Order = OrderItem & {
  id: number;
  status:string;
  contact:string;
  createdAt: Date;
  updatedAt:Date;
}

export type OrderId = Order['id']

export default Order;