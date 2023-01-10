import React, { memo } from "react";
// import './NavBar.css'
import styles from "./styles.module.css";
import heartPic from "./img/HeartStraight.svg";
import searchPic from "./img/MagnifyingGlass.png";
import cartPic from "./img/ShoppingCart.svg";
import userPic from "./img/User.png";

import { Link, useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { selectUser } from "../../auth/selectors";
import * as api from '../../auth/api';
import { logoutSuccess } from "../../auth/authSlice";
import { useAppDispatch } from "../../../store";


function NavBar(): JSX.Element {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  console.log(user);

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
      dispatch(logoutSuccess());
      navigate('/');
  }
  
  return (
    <div>
      <nav className={styles.header}>
        <Link to="/" style={{ fontSize: "24px" }}>
          Jurgensons
        </Link>

        {/* <Link to="/"><img src={logo}/></Link> */}
        <div className={styles.titlecontainer}>

        { user && (
          <div className={styles.link}>Привет, {user.name}</div>
        )}
          {/* <a className={styles.link} href="#aboutUs">О нас</a> */}
          <Link className={styles.link} to="/about">
            О нас
          </Link>
          <Link to="/items">Каталог</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div className={styles.buttoncontainer}>
          <a href="">
            <img src={searchPic} alt="searchPic" />
          </a>
          <a href="">
            <img src={heartPic} alt="heartPic" />
          </a>
          <a href="">
            <img src={cartPic} alt="cartPic" />
          </a>
          { user && <a href="/profile">
            <img src={userPic} alt="userPic" />
          </a>
          }
          { user && (
          <a href="#" role="button" tabIndex={0} onClick={handleLogout}>
          Выйти
        </a>
          )
          }
        </div>
      </nav>
    </div>
  );
}

export default memo(NavBar);
