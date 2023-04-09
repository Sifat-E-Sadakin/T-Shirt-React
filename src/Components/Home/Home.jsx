import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Products from '../../Products/Products';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

export let nam= createContext()

const Home = () => {

    let data = useLoaderData();
    let [cart, setCart]= useState([])

    let atc= (tShirt)=>{
        // console.log(tShirt);
        let checkDouble = cart.find(item=> item._id == tShirt._id)
        if(checkDouble){
            toast('Ek T-shirt ek bar')
            return;

        }
        else{
            cart= [...cart, tShirt];
        setCart(cart);
        }

        
    }

    let msg;

    if(cart.length==0){
        msg="can't effort?"
    }

    let rfc= id =>{
        
       
        
            let remainingItem =cart.filter(item=> item._id != id);
        setCart(remainingItem);
        

        
    }

    return (
        <div className='home'>

            <nam.Provider value={atc}>
            <div className='productContainer'>
                {
                   data.map(product => <Products data={product}  ></Products>) 
                }
            </div>

            <div className='cartContainer'>
                <h3>Total item in cart {cart.length}</h3>
                <p>{msg}</p>
                {
                    cart.map(item=> <Cart cart={item} rfc={rfc}></Cart>)
                }
            </div>
            <Toaster />

            </nam.Provider>
            
           
        </div>
    );
};

export default Home;
