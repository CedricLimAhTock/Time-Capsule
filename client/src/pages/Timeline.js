import React from 'react'
import Event from '../components/Event/Event'
import TimelineControl from '../components/TimelineControl/TimelineControl'
import img from '../assets/temp2.png'

const Timeline = () => {
    const temp = {
        title: 'Event Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lorem neque.',
        image: img,
    }

  return (
    <div>
        <TimelineControl />
        <Event event={temp}/>
    </div>
  )
}

export default Timeline