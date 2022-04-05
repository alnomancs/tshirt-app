import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('');

const Grandpa = () => {
    const ornament = 'Diamond Ring';

    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <p>House: {house}</p>
                <button onClick={handleBuyAHouse}>Buy a house</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>

    );
};

export default Grandpa;