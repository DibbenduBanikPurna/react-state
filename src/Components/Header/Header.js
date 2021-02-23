import React, { useContext, useState } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category,setCategory]=useContext(categoryContext)
  
  
    return (
        <div>
                <h2>This is Header:{category}</h2>
                <button onClick={()=>setCategory('laptop')}>Laptop</button>
                <button onClick={()=>setCategory('phone')}>Phone</button>
                <button onClick={()=>setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;