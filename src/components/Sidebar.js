import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src='https://media.istockphoto.com/id/1473117037/photo/3d-liquid-colorful-paint-background.jpg?s=612x612&w=0&k=20&c=Xg4jWPWGzJyYYwXjgjy9x_NAbEx5VXPiB0mm738rkII=' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Chris Sampson</h2>
                <h4>chris.samps@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Profile viewers</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Post impressions</p>
                    <p className='sidebar__statNumber'>2,449</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    );
}

export default Sidebar;
