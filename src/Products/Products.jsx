import React, { useContext } from 'react';
import './Products.css'
import { nam } from '../Components/Home/Home';
const Products = ({data}) => {

    let atc= useContext(nam);
let {name, picture, price, _id }= data;

    return (
        <div >


            <div className='cards'>
                
                <img src={picture} alt="" id='picture' />
                <h2>{name}</h2>
                <h5>Price: {price} =/ Taka</h5>
                <button onClick={()=>atc(data)}>Buy Now</button>
            </div>
            
        </div>
    );
};

export default Products;