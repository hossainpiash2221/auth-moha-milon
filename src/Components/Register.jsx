import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { AuthContext } from '../Providedrs/AuthProvider';

const Register = () => {

    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);
    const handleRegister =e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email, password)


        //create User
        createUser(email,password)
        .then (result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .then (error => {
            console.log('Error',error)
        })
    }
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-[calc(100vh-160px)]">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Register now!</h1>
                     
                    </div>
                    <div className="card bg-base-100 min-w-[400px] shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" name='name' />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password"  name='password'/>
                            
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            <p className='ml-4 mb-4'> ALready have an account ? please <Link to='/login'>Login</Link> .</p> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;