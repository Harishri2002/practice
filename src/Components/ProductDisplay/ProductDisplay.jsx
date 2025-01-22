import React from "react";
import './ProductDisplay.css';

const ProductDisplay = ({ product }) => {
    return (
        <div className="productdisplay">
            {/* Left Section */}
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Thumbnail 1" />
                </div>
                <div className="productdisplay-img">
                    {/* Main Product Image */}
                    <img className="productdisplay-main-img" src={product.image} alt="Main Product" />
                </div>
            </div>

            {/* Right Section */}
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <h2>Welcome to product page</h2>
            </div>
        </div>
    );
};

export default ProductDisplay;
