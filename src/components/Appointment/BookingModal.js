import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ refetch, treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name } = treatment;
    const formattedDate = format(date, 'PP')
    const handlingSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                
            refetch()
            setTreatment(null)
                
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-primary border-primary text-white absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-primary mb-5 text-lg">Booking for : {treatment.name}</h3>
                    <form onSubmit={handlingSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name="email" type="email" disabled value={user?.email || ''
                        } className="input input-bordered w-full max-w-xs" />
                        <input name="phone" type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;