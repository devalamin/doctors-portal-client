import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const date = format(selectedDate, 'PP');

    const { name, slots } = treatment;

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        // console.log(name, email, phone, slot);

        const booking = {
            appointmentDate: date,
            treatmentName: name,
            patientName,
            email,
            phone,
            slot

        }
        setTreatment(null)
        console.log(booking)

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form onSubmit={handleBookingSubmit}>
                        <input type="text" disabled value={date} className="input input-bordered input-md w-full" />
                        <select name='slot' className="my-5 select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-md w-full" />
                        <input name='email' type="email" placeholder="Your Email" className="my-5 input input-bordered input-md w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="mb-5 input input-bordered input-md w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />

                    </form>

                </div>

            </div>

        </>
    );
};

export default BookingModal;