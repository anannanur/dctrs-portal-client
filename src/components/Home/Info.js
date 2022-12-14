import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-28'>
            <InfoCard bgColor="bg-gradient-to-r from-primary to-secondary" img={clock} cardTitle='Opening Hours' cardText='Lorem Ipsum is simply dummy text of the pri'></InfoCard>
            <InfoCard bgColor="bg-accent" img={marker} cardTitle='Visit our location' cardText='Brooklyn, NY 10036, United States'></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-primary to-secondary" img={phone} cardTitle='Contact us now' cardText='+000 123 456789'></InfoCard>
        </div>
    );
};

export default Info;