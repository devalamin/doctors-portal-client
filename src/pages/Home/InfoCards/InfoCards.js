import React from 'react';
import clock from '../../../icons/clock.svg'
import marker from '../../../icons/marker.svg'
import phone from '../../../icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui recusandae magni quos, amet voluptas.',
            bgClass: 'bg-primary',
            icon: clock
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui recusandae magni quos, amet voluptas.',
            bgClass: 'bg-secondary',
            icon: marker
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui recusandae magni quos, amet voluptas.',
            bgClass: 'bg-accent',
            icon: phone,
        },
    ]
    return (
        <div className='md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                infoData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;