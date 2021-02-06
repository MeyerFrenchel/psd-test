import React from 'react';
import './Features.styles.css';


const Features = ({primaryHead, lessons, minutes, widthSize, heightSize, left, top, imageUrl, socialIcon}) => {
    
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
            <img src={socialIcon} alt=""/>
            </div>
            
        </div>
    )
}

export default Features;
