import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {

    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null);

    const { data: appointments = [], refetch } = useQuery({
        queryKey: ['appointmentoptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentoptions?date=${date}`)
            const data = await res.json()
            return data

        }


    })




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
                    refetch={refetch}
                ></BookingModal>}

        </div>
    );
};

export default AvailableAppoinments;