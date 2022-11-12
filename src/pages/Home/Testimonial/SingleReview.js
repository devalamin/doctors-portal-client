import React from 'react';

const SingleReview = ({ reviewOne }) => {
    const { review, img, name, location } = reviewOne;
    return (
        <div className="card w-96 bg-neutral shadow-lg">
            <div className="card-body items-start text-start">
                <p className="card-title font-normal">{review}</p>

                <div className="text-start flex items-center lg:mt-8 mt-5">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src={img} />
                            </div>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <p className='font-bold'>{name}</p>
                        <p className='text-xl'>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleReview;