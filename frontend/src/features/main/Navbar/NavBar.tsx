import React, { memo } from "react";
// import  logo  from './logo192.png'
import './NavBar.css'
import { Link } from 'react-router-dom';


function NavBar(): JSX.Element {

    return (
        <div>
            <nav className="header">
          <h1>Навбар</h1>
          {/* <Link to="/"><img src={logo}/></Link> */}
          <Link to="/">О нас</Link>
          <Link to="/items">Каталог</Link>
          <Link to="/contacts">Контакты</Link>
          </nav>
        </div>
    )
}

export default memo(NavBar)