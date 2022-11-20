import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () => {
        setDeletingDoctor(null)
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('userToken')}`
                    }
                })
                const data = await res.json();
                return data

            }
            catch (errors) {


            }
        }
    })
    if (isLoading) {
        return <h3>Loading....</h3>
    }

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted');
                    refetch();

                }
                console.log(data)
            })

    }



    return (
        <div>
            all doctor are here {doctors?.length}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor?._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor?.name} </td>
                                <td>{doctor?.specialty}</td>
                                <td>{doctor?.email}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation" className="btn btn-error btn-xs">delete</label>

                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <ConfirmationModal
                title={`Are you sure?`}
                message={`If you delete ${deletingDoctor.name} it cannot be undone`}
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                closeModal={closeModal}
            ></ConfirmationModal>}
        </div>
    );
};

export default ManageDoctors;