import React from 'react';
import contactBg from '../../../../images/appointment.png'

const ContactUs = () => {
    return (
        <section
            style={{ background: `url(${contactBg})` }}
            className='lg:mt-20 mt-10'>
            <form action="">
                <div className='py-20 text-center'>
                    <h5 className='sm:text-2xl font-bold text-primary '>Contact Us</h5>
                    <p className='md:text-4xl text-xl text-white'>Stay connected with us</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <input type="text" placeholder="Your Email" className="input input-bordered input-success w-2/4" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-success w-2/4 my-10  " />
                    <textarea className="textarea w-2/4 textarea-info mb-10" placeholder="Message"></textarea>
                    <button className='btn mb-5 btn-primary px-10 text-white font-bold' type="submit">Submit</button>

                </div>
            </form>

        </section>
    );
};

export default ContactUs;