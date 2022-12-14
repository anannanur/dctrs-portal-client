import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            img: people2
        }, 
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            img: people3
        }
    ]
    return (
        <section className='px-28 pb-9'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-secondary font-bold'>Testimonials</h3>
                    <h1 className='text-4xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            {
                reviews.map(review => <Review review={review} key={review._id}></Review>)
            }
            </div>
        </section>
    );
};

export default Testimonial;