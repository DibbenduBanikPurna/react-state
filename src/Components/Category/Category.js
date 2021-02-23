import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
const productData=[
    {name:'Asus',category:'laptop'},{name:'Lenivo',category:'laptop'},{name:'Walton',category:'laptop'},
    {name:'Xioami',category:'phone'},{name:'I-Phone',category:'phone'},{name:'One-plus',category:'laptop'},
    {name:'Canon',category:'camera'},{name:'Nikon',category:'camera'},{name:'Sony',category:'camera'},
    
]
const Category = (props) => {
    const [product,setProduct]=useState([])
    const [category]=useContext(categoryContext)
   useEffect(()=>{
    const matchProduct=productData.filter(pd=>pd.category.toLowerCase()===category.toLowerCase())
    setProduct(matchProduct)
   },[category])

    return (
        <div>
            <p> Your Selected  Category: {category}</p>
            {
                product.map(pd=>{
                    return <CategoryDetail key={pd.name} product={pd}/>
                })
            }
           
        </div>
    );
};

export default Category;