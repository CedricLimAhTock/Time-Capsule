import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../components/Event/Event';
import TimelineControl from '../components/TimelineControl/TimelineControl.js';
import './style/Timeline.css'; // Import the CSS file

const Timeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5555/events')
      .then((response) => {
        const eventComponents = response.data.map((event, index) => (
          <Event
            key={event._id}
            event={event}
            isEven={index % 2 === 0} // Pass the condition as a prop
          />
        ));
        setEvents(eventComponents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TimelineControl />
      <div className="timeline">
        {events}
      </div>
    </>
  );
};

export default Timeline;
