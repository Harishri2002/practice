import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_logo from '../Assets/cart_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("LivingRoom");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" className="animated-logo" />
                <p></p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("LivingRoom")}>
                    <Link to='/'>Living Room</Link>
                    {menu === "LivingRoom" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("Bedroom")}>
                    <Link to='/Bedroom'>Bedroom</Link>
                    {menu === "Bedroom" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("DiningRoom")}>
                    <Link to='/DiningRoom'>Dining Room</Link>
                    {menu === "DiningRoom" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("Office")}>
                    <Link to='/Office'>Office</Link>
                    {menu === "Office" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_logo} alt="Cart Icon" className="animated-cart-icon" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
