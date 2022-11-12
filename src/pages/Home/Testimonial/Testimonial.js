import React from 'react';
import quote from '../../../icons/quote.svg'
import person from '../../../images/people1.png'
import SingleReview from './SingleReview';

const Testimonial = () => {

    const reviewsData = [
        {
            id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person
        },
        {
            id: 2,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person
        },
        {
            id: 3,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person
        },
    ]

    return (
        <section className='md:mt-20 mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-2xl font-bold text-secondary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewsData.map(reviewOne => <SingleReview
                        key={reviewOne.id}
                        reviewOne={reviewOne}
                    ></SingleReview>)
                }
            </div>

        </section>
    );
};

export default Testimonial;