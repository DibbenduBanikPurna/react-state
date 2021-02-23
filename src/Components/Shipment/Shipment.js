import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category,setCategory]=useContext(categoryContext)
    return (
        <div>
            <h5>Shipment Count: </h5>
            <button onClick={()=>setCategory('laptop')}>Click Me</button>
        </div>
    );
};

export default Shipment;