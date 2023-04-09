import React, { useContext } from 'react';
import { nam } from '../Home/Home';

const Cart = ({cart, rfc}) => {

    let n= useContext(nam);

   

    // console.log(cart);
    return (
        <div>
            <h2> {cart.name} <button style={{padding:'2px'}} onClick={()=> rfc(cart._id)}>X</button> </h2>
            <p>{n}</p>
            
        </div>
    );
};

export default Cart;