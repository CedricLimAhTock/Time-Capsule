import React from 'react'
import tempImage from '../../assets/temp2.png'
import './Event.css'

const Event = ( {event} ) => {
    const { img, title, date, description } = event

    const image = img ? img : tempImage;

    const tempFunction = () => {
        console.log('clicked')
    }


  return (
    <div className='event-card' onClick={tempFunction}>
        <div className='event-img'>
            <img className="eventImg" src={image} alt="food" />
        </div>
        <div className='event-info'>
            <p className='event-title'>{title}</p>
            <p className='event-description'>{description}</p>
        </div>
    </div>
  )
}

export default Event