import React from 'react';
import Navbar from '../Navbar';
import About from '../About';
import Services from '../Services';
import Banner from '../Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Navbar></Navbar>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;