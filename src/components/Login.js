import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { login } from '../features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        // auth.signInWithEmailAndPassword(email, password)
        //     .then((userAuth) => {
        //         dispatch(login({
        //             email: userAuth.user.email,
        //             uid: userAuth.user.uid,
        //             displayName: userAuth.user.displayName,
        //             photoUrl: userAuth.user.photoURL,
        //         }));
        //     })
        //     .catch(error => {
        //         alert(error);
        //     });

    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                userAuth.user({
                    displayName: name,
                    photoURL: profilePic,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    }));
                });
            })
            .catch(error => {
                alert(error);
            });
    };
    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837' alt='linkedIn logo' />

            <form onSubmit={loginToApp}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)} type='text'
                    placeholder='Full name (required if registering)'
                />

                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)} type='text'
                    placeholder='Profile pic URL (optional)'
                />

                <input value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email'
                />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)} type='password'
                    placeholder='Password'
                />

                <button type='submit'>Sign In</button>
            </form>

            <p>Do not have an account yet?{' '}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>

        </div>
    );
}

export default Login;
