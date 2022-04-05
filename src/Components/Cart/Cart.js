import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional rendering option
    // 1. Element variable
    // 2. Ternary Operator condition? '' : '';
    let command;
    if (cart.length === 0) {
        command = <p>Please add some item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>thanks for adding product</small></p>
    }


    return (
        <div>
            <h1>Item Selected {cart.length}</h1>

            {
                cart.map(tShirt =>
                    <p>{

                        tShirt.name}
                        <span> </span>
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>tin jon k ki gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>remove all</button>}
            {cart.length === 4 && <button>Review Item</button>}
        </div>
    );
};

export default Cart;