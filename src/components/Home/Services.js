import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : teeth
        }
    ]
    return (
        <div className='pt-20'>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-xl'>OUR SERVICES</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='py-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-28'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;