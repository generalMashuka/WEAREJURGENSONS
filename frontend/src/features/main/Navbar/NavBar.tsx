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
          <Link to="/">О проекте</Link>
          <Link to="/">Как купить</Link>
          <Link to="/">Контакты</Link>
          </nav>
        </div>
    )
}

export default memo(NavBar)