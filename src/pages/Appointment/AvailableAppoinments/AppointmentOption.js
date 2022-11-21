import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots?.length > 0 ? slots[0] : 'No Appointment Today'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">

                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(option)}

                            htmlFor="booking-modal"
                            className="btn btn-primary">Book Appointment</label>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentOption;