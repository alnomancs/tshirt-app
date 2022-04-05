import React, { useEffect, useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {

    const [tShirts, setTShirts] = useTShirts([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {

            const newCart = [...cart, selectedItem]
            setCart(newCart);
        }
        else {
            alert('item already added');
        }
    }
    const handleRemoveFromCart = (selectedItem) => {
        const restItem = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(restItem);

    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {/* <h1>{tShirts.length}</h1> */}

                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }


            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={
                        handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;