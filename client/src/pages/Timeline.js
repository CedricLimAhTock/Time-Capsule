import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library
import Event from '../components/Event/Event';
import TimelineControl from '../components/TimelineControl/TimelineControl.js';

const Timeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5555/events12')
      .then((response) => {
        const eventComponents = response.data.map((event) => (
          <Event key={event._id} event={event} />
        ));
        setEvents(eventComponents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TimelineControl />
      {events}
    </div>
  );
};

export default Timeline;
