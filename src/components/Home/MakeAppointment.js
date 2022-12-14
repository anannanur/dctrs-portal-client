import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div style={{ background: `url(${appointment})`}}
        className='flex justify-center items-center my-16 px-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-secondary uppercase font-bold text-xl'>Appointment</h4>
                <h1 className='text-white font-bold my-4 text-4xl'>Make an appointment Today</h1>
                <p className='text-white mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            
        </div>
    );
};

export default MakeAppointment;