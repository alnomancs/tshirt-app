import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p><small>gift from grandpa: {house}</small></p>
            <button onClick={handleHouseIncrease}>Aunty magic</button>
        </div>
    );
};

export default Aunty;