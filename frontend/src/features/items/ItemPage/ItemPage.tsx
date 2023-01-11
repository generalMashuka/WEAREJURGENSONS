import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectItems } from '../selectors';

import styles from './itemPage.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart/cartSlice';
import { useState } from 'react';

function ItemPage(): JSX.Element {
  const { id } = useParams();
  const items = useSelector(selectItems);
  // const loadError = useSelector(selectLoaderror);
  const item = items.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState(false);

  const handleByeClick = (): void => {
    dispatch(addToCart({ item }));
    setText(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.pic}>
        <div className={styles.name}>
          <h4>{item!.description}</h4>
          <h5>{item!.name}</h5>
          <p>{item!.price}</p>
          <button onClick={handleByeClick} className={styles.buyButton}>
            Купить
          </button>
        </div>
        <img src={item!.img} className="card-img" alt="..." />
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
      {text && (
        <div>
          <p>Товар добавлен в корзину</p>
        </div>
      )}
    </div>
  );
}

export default ItemPage;
