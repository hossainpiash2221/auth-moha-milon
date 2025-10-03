import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providedrs/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const {signInUser ,signInWithGoogle} =useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        //login
        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .then(error => {
            console.log(error)
        });
        
    }

    const handleGoogleSingIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error => {
            console.log(error.message);
            
        })
    }
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-[calc(100vh-160px)]">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                     
                    </div>
                    <div className="card bg-base-100 min-w-[400px] shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password"  name='password'/>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p className='ml-4 mb-4'> New to this website ? please <Link to='/register'>Register</Link></p>
                            <p>
                                <button onClick={handleGoogleSingIn} className='btn btn-ghost'>Googole</button>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Login;