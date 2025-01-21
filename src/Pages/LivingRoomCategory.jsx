import React, { useContext } from "react";
import './css/LivingRoomCategory.css'; // Ensure your CSS file has styles for the components
import { ShopContext } from "../Context/ShopContext";
import Item from '../Components/Item/Item';
import drop_icon from '../Components/Assets/drop.jpg';

const LivingRoomCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    console.log("All products from context:", all_product); // Debug all products
    console.log("Selected Category:", props.category); // Debug selected category

    return (
        <div className="livingroom-category">
            {/* You may want to include the banner image */}
            {/* <img className="shopcategory-banner" src={props.banner} alt="Living Room Banner" /> */}
            
            <div className="livingroomcategory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of {all_product.length} products
                </p>
                <div className="sort">
                    Sort by <img src={drop_icon} alt="Dropdown Icon" />
                </div>
            </div>
            
            <div className="products">
                {/* Filter products by the category passed through props */}
                {all_product
                    .filter((item) => item.LivingRoomCategory === props.category) // Filter based on category
                    .map((item) => {
                        console.log("Rendering Item:", item); // Debug rendering item
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    })}
            </div>
            
            <div className="btn">
                Explore More
            </div>
        </div>
    );
};

export default LivingRoomCategory;
