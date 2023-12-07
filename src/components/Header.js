import React from 'react';
import './Header.css';
import Logo from '../assets/linkedin.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../utilities/HeaderOption';
import { HomeRounded, SupervisorAccountRounded, BusinessCenterRounded, ChatRounded, NotificationsRounded } from '@mui/icons-material';


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={Logo} alt='linkedin-logo' />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeRounded} title='Home' />
                <HeaderOption Icon={SupervisorAccountRounded} title='My Network' />
                <HeaderOption Icon={BusinessCenterRounded} title='Jobs' />
                <HeaderOption Icon={ChatRounded} title='Messaging' />
                <HeaderOption Icon={NotificationsRounded} title='Notifications' />
                <HeaderOption avatar='https://media.licdn.com/dms/image/D4D03AQFgdM_JlMkoQg/profile-displayphoto-shrink_800_800/0/1691798339846?e=1706745600&v=beta&t=0yXustDZ6HNiIh8Jh57tAq1c9s6eqEjS0DtV8uXzK1I' title='Me' />
            </div>

        </div>
    );
}

export default Header;
