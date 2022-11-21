import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';




const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);


const Payment = () => {

    const data = useLoaderData();
    const { treatmentName, appointmentDate, patientName, price, slot } = data;
    return (
        <div>
            <p className="tex-3xl font-bold">Payment for {treatmentName}</p>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        data={data}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;