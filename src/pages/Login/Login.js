import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLogin } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    console.log(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(loginUserEmail);


    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })

    }


    const handleLogin = data => {
        // console.log(data);
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user
                // console.log(result.user);
                console.log(data);
                setLoginUserEmail(data.email)
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <div className='flex items-center justify-center h-[700px]'>
                <div className='w-96 border-1 shadow-xl rounded-md border-primary p-10'>
                    <h3 className='text-4xl font-bold'>Login</h3>

                    <form onSubmit={handleSubmit(handleLogin)}>

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
                            <input type='password' {...register("password", { required: "Password field can't be empty" })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>
                        </div>
                        {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                        <input className='btn btn-accent w-full my-6' value='Login' type="submit" />
                    </form>
                    <p>New to doctors portal? <Link className='text-secondary' to='/register'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>

                </div>

            </div>
        </div>
    );
};

export default Login;