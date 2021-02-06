import React from 'react';
import './Features.styles.css';
import Group1 from '../../assets/Group 1.png';

const Features = ({primaryHead, lessons, minutes, widthSize, heightSize, left, top, imageUrl}) => {
    
    return (
        <div className='feature'
        style={{
            backgroundImage:`url(${imageUrl})`,
            width:`${widthSize}px`,
            height:`${heightSize}px`,
            left:`${left}px`,
            top:`${top}px`
        }}>
            <div className="heading">
            <div className='primary-head'>
            <h2>{primaryHead}</h2>
            <p className='lessons'>{lessons} lessons</p>
            </div>
            
            <h2 className='secondary-head'>{minutes} min</h2>
            
            </div>
            <div className='social-icon'>
            <img src={Group1} alt=""/>
            </div>
            
        </div>
    )
}

export default Features;
