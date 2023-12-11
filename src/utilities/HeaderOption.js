import React from 'react';
import { useSelector } from 'react-redux';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { selectUser } from '../features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    // Checking if user exists before accessing its properties
    const displayNameInitial = user?.displayName ? user.displayName[0] : '';
    const userPhotoUrl = user?.photoUrl || ''; // Default to an empty string if photoUrl is not available

    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && (
                <Avatar className='headerOption__icon' src={userPhotoUrl}>
                    {/* Display displayNameInitial as a tooltip */}
                    <span title={user?.displayName}>{displayNameInitial}</span>
                </Avatar>
            )}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption;