import React from 'react';
import img from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="hero min-h-screen bg-white mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className='lg:pl-10 p-20 lg:p-0'>
                    <h1 className="max-w-lg mt-8 lg:mt-0 text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="max-w-lg py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;