import React from 'react'
import tempImage from '../../assets/testing.jpg'
import './Event.css'

const Event = ({ event }) => {
    const { img, title, description } = event

    const image = img ? img : tempImage;

    const tempFunction = () => {
        console.log('clicked')
    }

    return (
        <div className='timeline-item'>
            <div className="timeline-img"></div>
            <div className='timeline-content' onClick={tempFunction}>

                <div className='event-img'>
                    <img className="eventImg" src={image} alt="food" />
                </div>
                <div className='event-info'>
                    <p className='event-title'>{title}</p>
                    <p className='event-description'>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default Event
