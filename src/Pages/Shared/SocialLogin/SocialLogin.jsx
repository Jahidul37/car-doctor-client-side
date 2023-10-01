import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)


    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button className=' border rounded-full mx-auto mb-4 px-4 text-3xl' onClick={handleGoogle}>G</button>
        </div>
    );
};

export default SocialLogin;