import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';
import LivingRoom from './Pages/LivingRoom';
import LoginSignup from './Pages/LoginSignup';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import LivingRoomCategory from './Pages/LivingRoomCategory';
import Product from './Pages/Product';
import Cart from './Pages/cart'; // Ensure Cart component exists

import banner3 from './Components/Assets/banner3.jpg';
import ban2 from './Components/Assets/ban2.jpg';
import ban1 from './Components/Assets/ban1.jpg';

function App() {
    return (
        <ShopContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<LivingRoom />} />

                    {/* Living Room Categories */}
                    <Route
                        path="/Bedroom"
                        element={<LivingRoomCategory banner={banner3} category="Bedroom" />}
                    />
                    <Route
                        path="/DiningRoom"
                        element={<LivingRoomCategory banner={ban2} category="Dining Room" />}
                    />
                    <Route
                        path="/Office"
                        element={<LivingRoomCategory banner={ban1} category="Office" />}
                    />

                    {/* Cart and Product Details */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:productId" element={<Product />} />

                    {/* Login/Signup Page */}
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ShopContextProvider>
    );
}

export default App;
