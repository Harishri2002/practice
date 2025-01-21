import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

import { useParams } from "react-router-dom";
import ProductDisplay from "../ProductDisplay/ProductDisplay.jsx";


const Product = () => {
    const { all_product } = useContext(ShopContext); // Destructure all_product from context
    const { productId } = useParams(); // Get productId from route params
    const product = all_product.find((e) => e.id === Number(productId)); // Find matching product

    if (!product) {
        // Handle case where the product is not found
        return <div>Product not found</div>;
    }

    return (
        <div>
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;
