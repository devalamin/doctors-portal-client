import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='chair' className="lg:w-2/4 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>Available Appointment On {format(selectedDate, 'PP')}</p>

                    </div>
                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;