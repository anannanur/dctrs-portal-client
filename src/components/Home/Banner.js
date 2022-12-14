import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" 
        style={{background: `url(${bg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="max-w-lg text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="w-11/12 py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                   <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;