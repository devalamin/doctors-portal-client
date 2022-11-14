import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')

    const handleRegister = (data) => {
        console.log(data);
        createNewUser(data.email, data.password)
            .then(result => {
                setRegisterError('')
                console.log(result.user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                console.log(userInfo);
                updateUserProfile(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error))


            })
            .catch(err => {
                setRegisterError(err.message)
                console.error(err.message)

            })

    }



    return (
        <div>
            <div className='flex items-center justify-center h-[700px]'>
                <div className='w-96 border-1 shadow-xl rounded-md border-primary p-10'>
                    <h3 className='text-4xl font-bold'>Registration</h3>

                    <form onSubmit={handleSubmit(handleRegister)}>

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
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' {...register("password", {
                                required: "Password field can't be empty",
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                    , message: 'password not valid'
                                }

                            })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>
                        </div>
                        {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                        <input className='btn btn-accent w-full my-6' value='Register' type="submit" />
                    </form>
                    {registerError && <p className='text-red-500'>{registerError}</p>}
                    <p>Already Have An Account? <Link className='text-secondary' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>

                </div>

            </div>
        </div>
    );
};

export default Register;