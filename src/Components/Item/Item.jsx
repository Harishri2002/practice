import React from "react";
import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item">
          <Link to={`/product/${id}`}><img src={image} alt={name} /></Link>

            <div className="item-details">
                <h3>{name}</h3>
                <p>
                    <span className="new-price">New Price:₹{new_price}</span><br></br>
                    <span className="old-price">Old Price:₹{old_price}</span>
                </p>
            </div>
        </div>
    );
};

export default Item;
