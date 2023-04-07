import React from 'react';
import './Products.css'
const Products = ({data}) => {
let {name, picture, price }= data;

    return (
        <div >


            <div className='cards'>
                
                <img src={picture} alt="" id='picture' />
                <h2>{name}</h2>
                <h5>Price: {price} =/ Taka</h5>
                <button>Buy Now</button>
            </div>
            
        </div>
    );
};

export default Products;