import React from "react";
import './NewCollections.css';
import new_collections from '../Assets/new_collections'; // Ensure this path is correct
import Item from "../Item/Item";

const NewCollections = () => {
    return (
        <div className="newcollections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {Array.isArray(new_collections) && new_collections.length > 0 ? (
                    new_collections.map((item, i) => (
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
