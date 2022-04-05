import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const { handleAddToCart, tShirt } = props;
    const { name, price, picture } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3> {name}</h3>
            <h4>{price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>


        </div>
    );
};

export default TShirt;