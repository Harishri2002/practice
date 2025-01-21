import React from "react";
import './ProductDisplay.css';

const ProductDisplay = ({ product }) => {
    return (
        <div className="productdisplay">
            {/* Left Section */}
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {/* Display thumbnails */}
                    <img src={product.image} alt="Thumbnail 1" />
                    <img src={product.image} alt="Thumbnail 2" />
                    <img src={product.image} alt="Thumbnail 3" />
                    <img src={product.image} alt="Thumbnail 4" />
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

                {/* Commented out optional star rating section */}
                {/* Uncomment and update this section as needed */}
                {/* <div className="productdisplay-right-star">
                    <img src="" alt="Star 1" />
                    <img src="" alt="Star 2" />
                    <img src="" alt="Star 3" />
                    <img src="" alt="Star 4" />
                    <img src="" alt="Star 5" />
                    <p>Rating details here</p>
                </div> */}
            </div>
        </div>
    );
};

export default ProductDisplay;
