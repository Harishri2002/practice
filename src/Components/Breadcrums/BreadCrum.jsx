import React from "react";
import './Breadcrum.css'


const BreadCrum = (props) => {
    const {product}=props;
    return (
        <div className="breadcrum">
            HOME {product.category} {product.name}
        </div>
    )
}
export default BreadCrum