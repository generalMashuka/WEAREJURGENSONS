import React, { memo, useState } from 'react';
import styles from './styles.module.css';
import heartPic from './img/HeartStraight.svg';
import searchPic from './img/MagnifyingGlass.png';
import cartPic from './img/ShoppingCart.svg';
import userPic from './img/User.png';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../auth/selectors';
import * as api from '../../auth/api';
import { logoutSuccess } from '../../auth/authSlice';
import { useAppDispatch } from '../../../store';

function NavBar(): JSX.Element {
  const user = useSelector(selectUser);

  const navigate = useNavigate();
  const dispatchApp = useAppDispatch();

  const [statusSearch, setStatusSearch] = useState(false);
  const [text, setText] = useState('');

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatchApp(logoutSuccess());
    navigate('/');
  };

  const handleSearchClick = (): void => {
    setStatusSearch(true);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleSearchSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    setStatusSearch(false);
    navigate(`/search?q=${text}`);
  };

  return (
    <div>
      <nav className={styles.header}>
        <Link to="/" style={{ fontSize: '24px' }}>
          Jurgensons
        </Link>

        <div className={styles.buttoncontainer}>
          <div className={styles.titlecontainer}>
            {user && <div className={styles.link}>Привет, {user.name}</div>}
            <Link to="/items">Каталог</Link>
            <Link to="/contacts">Контакты</Link>
          </div>

          {!statusSearch ? (
            <Link to="/items" onClick={handleSearchClick}>
              <img src={searchPic} alt="searchPic" />
            </Link>
          ) : (
            <form onSubmit={handleSearchSubmit}>
              <input
                className={styles.input}
                value={text}
                onChange={handleSearchChange}
              />
              <button className={styles.btnDelet} type="submit">
                <img src={searchPic} alt="searchPic" />
              </button>
            </form>
          )}
          <Link to="/cart">
            <img src={cartPic} alt="cartPic" />
          </Link>

          {user && (
            <Link to="/profile">
              <img src={userPic} alt="userPic" />
            </Link>
          )}
          {user && (
            <a href="#" role="button" tabIndex={0} onClick={handleLogout}>
              Выйти
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}

export default memo(NavBar);
