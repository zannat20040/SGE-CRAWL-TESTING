import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const page = () => {
    return (
        <div className='pb-32'>
            <Banner/>
            <Navbar/>
        </div>
    );
};

export default page;