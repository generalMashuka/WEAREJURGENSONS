import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  createOrder,
} from '../../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../items/selectors';
import CartItemView from '../cartItem/CartItemView';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import Total from '../total/Total';
import styles from './Cart.module.css';

function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  const [order, setOrder] = useState(false);
  const [succsess, setSuccsess] = useState(false);
  const [text, setText] = useState('');
  // const navigate = useNavigate();

  const handleOrderButton = (): void => {
    setOrder(true);
  };

  const handleSend = (): void => {
    setOrder(false);
    const payload = { cart: cartItems, contact: text };
    dispatch(createOrder(payload));
    setSuccsess(true);
  };

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  return (
    <div className={styles.cart}>
      <h3>Shopping Cart</h3>

      {succsess ? (
        <h4>Заказ оформлен. с Вами свяжется наш менеджер.</h4>
      ) : (
        <>
          <div className={styles.items}>
            {cartItems?.map((item) => (
              <CartItemView key={item.item.id} cartItem={item} />
            ))}
          </div>
          {order ? (
            <div>
              <div>
                <Total />
              </div>
              <form onSubmit={handleSend}>
                <input
                  className={styles.input}
                  value={text}
                  onChange={handleTextInput}
                />
                <button className={styles.btnDelet} type="submit">
                  Подтвердить оформление заказа
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className={styles.btn}>
                <div>
                  <Total />
                </div>
                <button className={styles.btnDelet} onClick={handleOrderButton}>
                  Оформить заказ
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CartPage;
