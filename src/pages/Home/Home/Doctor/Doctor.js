import React from 'react';
import doctor from '../../../../images/doctor-small.png';
import background from '../../../../images/appointment.png'
import PrimaryButton from '../../../../Components/Button/PrimaryButton';

const Doctor = () => {
    return (
        <section
            style={{ background: `url(${background})` }}
            className="hero md:mt-32 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={doctor} className="lg:w-1/2  -mt-32 rounded-lg lg:block hidden" />
                <div className='text-white'>
                    <p className='text-xl font-bold text-secondary'>Appointment</p>
                    <h1 className="md:text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Doctor;