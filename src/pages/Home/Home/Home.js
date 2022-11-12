import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';
import Doctor from './Doctor/Doctor';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <Doctor></Doctor>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;