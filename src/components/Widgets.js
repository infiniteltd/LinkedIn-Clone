import React from 'react';
import './Widgets.css';
import { InfoRounded, FiberManualRecordRounded } from '@mui/icons-material';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordRounded />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );


    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News Feed</h2>
                <InfoRounded />
            </div>
            {newsArticle("Liverpool thrash Crystal Palace in wonderful come back", "Trending news - 45000 readers")}
            {newsArticle("Avatar franchise hits $3b in new cinema hit", "Top news - 95040 readers")}
            {newsArticle("Bitcoin hits all time low at $9.8k", "Crypto news - 8040 readers")}
            {newsArticle("Avatar franchise hits $3b in new cinema hit", "Top news - 95040 readers")}
            {newsArticle("Havard university is starting new online free courses", "Trending news - 15040 readers")}
        </div>
    );
}

export default Widgets;
