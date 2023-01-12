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

      <p className={styles.cartTiitle}>Корзина</p>

      {succsess ? (
        <p className={styles.cartText}>Заказ оформлен. с Вами свяжется наш менеджер.</p>
      ) : (
        <>
          <div className={styles.items}>
            { cartItems.length === 0 && (
              <div>
                <p className={styles.cartText}>Ваша корзина пуста. Перейдите в каталог для добавления товара</p>
              </div>
            )}
            {cartItems?.map((item) => (
              <CartItemView key={item.item.id} cartItem={item} />
            ))}
          </div>
          {order ? (
            <div>
              { cartItems.length !== 0 && (
              <div>
              <Total />
            </div>
              ) }
              <form onSubmit={handleSend}>

              <p>Оставьте контактные данные для оформления заказа</p>
                <input
                  className={styles.input}
                  required
                  placeholder='+79995553322 whatsapp'
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
              { cartItems.length !== 0 && (
              <div>
              <Total />
            </div>
              ) }
              { cartItems.length !== 0 && (
                <button className={styles.btnDelet} onClick={handleOrderButton}>
                Оформить заказ
              </button>
              )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CartPage;
