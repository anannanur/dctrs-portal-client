import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen"
            style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You picked {format(date, 'PP')}.</p>
                </div>

            </div>

        </div>
    );
};

export default AppointmentBanner;