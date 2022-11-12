import React from 'react';
import PrimaryButton from '../../../../Components/Button/PrimaryButton';
import treatment from '../../../../images/treatment.png'

const Treatment = () => {
    return (
        <div className="hero bg-base-100 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="md:max-w-md  rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;