import React from "react";
import './Footer.css'
import logo from '../Assets/logo.png'
import insta from'../Assets/insta.png'
import whats from '../Assets/whatsapp.jpg'
import pin from '../Assets/pinterest.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src="{logo}" alt="" />
                
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta}alt="" />


                   
                </div>

                <div className="footer-icons-container">
                    <img src={whats}alt="" />


                   
                </div>

                <div className="footer-icons-container">
                    <img src={pin}alt="" />


                   
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer