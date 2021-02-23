import React, { useContext } from 'react';


const CategoryDetail = (props) => {
   const {name}=props.product
   
    return (
        <div>
            <h5>This is your category detail:{name}</h5>
            
        </div>
    );
};

export default CategoryDetail;