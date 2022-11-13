import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {

    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    return (
        <div className='md:my-16 my-10'>
            <p className='text-center text-secondary font-bold'>Available Appointment On {format(selectedDate, 'PP')}</p>
            <div className='mt-10 grid gap-3 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointments.map(option => <AppointmentOption
                        key={option?._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}

        </div>
    );
};

export default AvailableAppoinments;