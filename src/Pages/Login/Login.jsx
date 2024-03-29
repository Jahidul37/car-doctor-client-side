import React, { useContext } from 'react';
import logins from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)

    // useLocation ,navigate ai 2i ta private route theke ashce .
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // ,& from er vitor state a set kore dice location ta.


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // navigate private route theke ashce & private route er jonn
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200 py-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">

                    <img src={logins} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p >New to car Doctors? <Link to='/register'><button className='text-orange-500 font-bold'>register</button></Link></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;