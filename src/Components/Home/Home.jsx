import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Products from '../../Products/Products';

const Home = () => {

    let data = useLoaderData();

    return (
        <div className='home'>
            <div className='productContainer'>
                {
                   data.map(product => <Products data={product} ></Products>) 
                }
            </div>

            <div className='cartContainer'>
                <h2> cart here    </h2>
            </div>
        </div>
    );
};

export default Home;