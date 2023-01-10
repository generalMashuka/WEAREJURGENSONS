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
    <div>
      <h3>Shopping Cart</h3>

      {succsess ? (
        <h4>Заказ оформлен. с Вами свяжется наш менеджер.</h4>
      ) : (
        <>
          {cartItems?.map((item) => (
            <CartItemView key={item.item.id} cartItem={item} />
          ))}
          {order ? (
            <div>
              <form onSubmit={handleSend}>
                <input value={text} onChange={handleTextInput} />
                <button type="submit">Подтвердить оформление заказа</button>
              </form>
            </div>
          ) : (
            <div>
              <button onClick={handleOrderButton}>Оформить заказ</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CartPage;
