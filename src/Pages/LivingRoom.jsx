import React from "react";
import Hero from "../Components/Hero/Hero"; // Correct import for the Hero component
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from '../Components/NewsLetter/NewsLetter'




const LivingRoom = () => {
    return (
        <div>
            <Hero />
            <Popular/>
            <Offers/>
          
          < NewCollections/>
          <NewsLetter/>
         
        </div>
    );
};

export default LivingRoom;
