import React from 'react'
import tempImage from '../../assets/testing.jpg'
import './Event.css'

const Event = ({ event, isEven, onEventClick }) => {
    const { img, title, description, date } = event

    const image = img ? img : tempImage;

    const toggleForm = (event) => {
        onEventClick(event);
    }

    return (
        <div className={isEven ? 'container left' : 'container right'} onClick={() => toggleForm(event)}>
            <div className="date">15 JUL</div>
            <div className='content'>
                <img className="eventImg" src={image} alt="food" />
                <div className="content-info">
                    <h2 className='event-title'>{title}</h2>
                    <p className='event-description'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Event
