import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../components/Event/Event';
import TimelineControl from '../components/TimelineControl/TimelineControl.js';
import './style/Timeline.css'; // Import the CSS file
import EditEventForm from '../components/EventForm/EditEventForm'

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Store selected event data

  // Function to handle receiving the ID and event data from the child component
  const handleEventClick = (event) => {
    console.log(`Event clicked with ID: ${event._id}`);
    setSelectedEvent(event); // Set the selected event data
    setIsEventFormOpen(true);
  };

  const toggleEventForm = () => {
    const body = document.body;

      if (isEventFormOpen) {
        setIsEventFormOpen(false);
        document.body.style.overflow = 'auto'; // Restore scrolling when form is closed
        body.classList.remove('blur-background');
      } else {
        setIsEventFormOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when form is open
        body.classList.add('blur-background');
      }
    };

// Render event components from API
  useEffect(() => {
    axios
      .get('http://localhost:5555/events')
      .then((response) => {
        const eventComponents = response.data.map((event, index) => (
          <Event
            key={event._id}
            event={event}
            isEven={index % 2 === 0}
            onEventClick={handleEventClick} // Pass the function as a prop
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
      {isEventFormOpen && (
        <EditEventForm
          isEventFormOpen={isEventFormOpen}
          onClose={() => {
            setIsEventFormOpen(false);
            setSelectedEvent(null); // Clear selected event data
          }}
          eventData={selectedEvent} // Pass the selected event data as a prop
        />
      )}
    </>
  );
};

export default Timeline;

