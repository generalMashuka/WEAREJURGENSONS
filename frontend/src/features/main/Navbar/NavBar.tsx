import React, { memo } from "react";
// import  logo  from './logo192.png'
// import './NavBar.css'
import styles from './styles.module.css'
import heartPic from './img/HeartStraight.svg'
import searchPic from './img/MagnifyingGlass.png'
import cartPic from './img/ShoppingCart.svg'
import userPic from './img/User.png'

import { Link } from 'react-router-dom';


function NavBar(): JSX.Element {

    return (
        <div>
            <nav className={styles.header}>
                <Link to="/" style={{ fontSize: '24px'}}>Jurgensons</Link>
          
          {/* <Link to="/"><img src={logo}/></Link> */}
          <div className={styles.titlecontainer}>
          <Link className={styles.link} to="/">О нас</Link>
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
          <a href=""> 
        <img src={userPic} alt="userPic" />
          </a>
          </div>
          </nav>
        </div>
    )
}

export default memo(NavBar)