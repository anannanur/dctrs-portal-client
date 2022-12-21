import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')
    const { isLoading, data:services, refetch } = useQuery(['available',formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res => res.json()
     )
   )
   if(isLoading){
    return <Loading/>
   }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div className='px-12 py-10'>
            <h1 className='text-primary text-xl text-center font-bold'>Available appointments on : {format(date, 'PP')}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    services.map(service => <Service setTreatment={setTreatment} service={service} key={service._id}></Service>)
                }
            </div>
            {
                treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;