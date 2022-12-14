import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl mt-5">
            <div className="card-body text-center">
                <h2 className="text-primary text-xl font-bold text-center">{service.name}</h2>
                {
                    service.slots.length ? <span>{service.slots[0]}</span> : <span className='text-red-500'>Try another day</span>
                }
              <p>{service.slots.length} {service.slots.length > 0 ? 'spaces': 'space' } available</p>
                <div className="card-actions justify-center">
                <label 
                    htmlFor="booking-modal"
                    onClick={() => setTreatment(service)}
                    disabled={service.slots.length === 0} 
                    className="btn uppercase border-none font-bold text-white bg-gradient-to-r from-primary to-secondary">Booking Appointment
                </label>
                </div>
            </div>
        </div>
    );
};

export default Service;