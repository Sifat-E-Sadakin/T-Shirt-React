import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    let data = useLoaderData();

    return (
        <div>
            <h2>home page {data.length}</h2>
        </div>
    );
};

export default Home;