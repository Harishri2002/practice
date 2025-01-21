import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/Breadcrums/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
    const { all_product } = useContext(ShopContext); // Destructure all_product from context
    const { productId } = useParams(); // Get productId from route params
    console.log('Product ID from URL:', productId);  // Debugging log

    const product = all_product.find((e) => e.id === Number(productId)); // Find matching product
    console.log('Product found:', product);  // Debugging log

    if (!product) {
        // Handle case where the product is not found
        return <div>Product not found</div>;
    }

    return (
        <div>
            {/* Render BreadCrumb and ProductDisplay only when the product is valid */}
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;
