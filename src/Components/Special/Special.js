import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {


    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <p>Special</p>
            <p>House: {house}</p>
            <p>Gift from Grandpa: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>

        </div>
    );
};

export default Special;