import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const category=useContext(categoryContext)
    
    return (
        <div style={{border:'2px solid purple'}}>
            <h2>This is Home:{category}</h2>
            <Category  />
        </div>
    );
};

export default Home;