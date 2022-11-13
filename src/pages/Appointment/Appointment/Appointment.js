import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';
import BookingModal from '../AvailableAppoinments/BookingModal';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppoinments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppoinments>

        </div>
    );
};

export default Appointment;