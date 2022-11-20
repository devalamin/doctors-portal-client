import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const imgHostingKey = process.env.REACT_APP_imgbb_key


    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentspecialty')
            const data = await res.json();
            return data;
        }


    })



    const handleAddDoctor = data => {
        const photo = data.photo[0];
        // console.log(photo);
        const formData = new FormData();

        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url

                    }
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('userToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            console.log(doctorData);
                            toast.success(`${data.name} added as a doctor`);
                            navigate('/dashboard/managedoctors')
                        })
                    // console.log(doctor);
                }

            })

    }


    if (isLoading) {
        return <h2>Loading....</h2>
    }



    return (
        <div className='w-96 p-7'>
            <h4 className="text-4xl">Add a doctor</h4>

            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type='text' {...register("name", { required: "Name is a  required field" })} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register('specialty', { required: 'specialty is required' })}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty => <option value={specialty.name} key={specialty._id}>{specialty?.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input type='file' {...register("photo", { required: "photo is a  required field" })} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.photo && <p className='text-red-700' role="alert">{errors.photo?.message}</p>}
                <input className='btn btn-accent w-full my-6' value='Add Doctor' type="submit" />
            </form>

        </div>
    );
};

export default AddDoctor;