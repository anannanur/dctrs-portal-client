import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    console.log(user)
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },

        })
            .then(res => {
                if (res.status === 403) {
                    return toast.error('Cant make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount < 1) {
                    refetch()
                    toast.success('Successfully made an admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <p className='text-teal-600'>Admin</p>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;