import React from "react";
import './breadcrum.css'


const BreadCrum = (props) => {
    const {product}=props;
    return (
        <div className="breadcrum">
            HOME {product.category} {product.name}
        </div>
    )
}
export default BreadCrum