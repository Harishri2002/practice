import React from "react";
import './NewCollections.css';
import all_product from '../Assets/all_product'; // Ensure this path is correct
import Item from "../Item/Item";

const NewCollections = () => {
    return (
        <div className="newcollections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {Array.isArray(all_product) && all_product.length > 0 ? (
                    all_product.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                ) : (
                    <p>No collections available.</p>
                )}
            </div>
        </div>
    );
};

export default NewCollections;
