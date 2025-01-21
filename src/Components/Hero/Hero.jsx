import React from "react";
import './Hero.css';
import coverpage from '../Assets/hero1.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="typing-text">
                    Transforming Spaces, Creating Comfort!
                </h1>
                <p>Elegant and stylish designs for your home</p>
                <button>Show More</button>
            </div>
        </div>
    );
};

export default Hero;
