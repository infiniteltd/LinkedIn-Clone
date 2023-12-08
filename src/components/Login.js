import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userAuth = userCredential.user;
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    profileUrl: userAuth.photoURL,
                }));
            })
            .catch(error => {
                alert(error);
            });
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userAuth) => {
                // Create a userCredential object
                const userCredential = {
                    user: userAuth.user,
                    credential: userAuth.credential,
                };

                // Update the user profile
                await updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: profilePic,
                });
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            })
            .catch(error => {
                alert(error);
            });
    };


    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837' alt='linkedIn logo' />

            <form onSubmit={e => e.preventDefault()}>
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

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Do not have an account yet?{' '}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>

        </div>
    );
}

export default Login;
