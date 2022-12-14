import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import Exceptional from './Exceptional';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info></Info>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;