import React from 'react';
import fluride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import whitening from '../../../../images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequuntur a corrupti. Quae, commodi ut.',
            img: fluride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequuntur a corrupti. Quae, commodi ut.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequuntur a corrupti. Quae, commodi ut.',
            img: whitening
        },
    ]


    return (
        <div className='md:mt-20 mt-10'>
            <div className='text-center my-10'>
                <h2 className='sm:text-xl text-xl font-bold text-primary uppercase'>Our Services</h2>
                <h5 className='text-2xl'>Services We Provide</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-5'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;