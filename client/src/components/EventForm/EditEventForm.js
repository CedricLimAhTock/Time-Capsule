import React, { useRef, useEffect, useState } from 'react';
import './EventForm.css';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import axios from 'axios';

const EditEventForm = ({ isEventFormOpen, onClose, eventData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose(); // Close the form when clicking outside
      }
    };

    // Attach the event listener when the form is open
    if (isEventFormOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEventFormOpen, onClose]);

  const [title, setTitle] = useState(eventData.title || '');
  const [description, setDescription] = useState(eventData.description || '');
  const [date, setDate] = useState(eventData.date || '');
  const id = eventData._id;

  const handleSubmit = async (event, action) => {
    event.preventDefault();

    if (action === 'edit') {
      try {
        const response = await axios.put(`http://localhost:5555/events/${id}`, {
          title: title.toString(),
          description: description.toString(),
          date: date,
        });

        if (response.status === 200) {
          alert('Updated');
          console.log(response);
        } else {
          console.log(response);
          console.log('Failed to update');
        }
      } catch (err) {
        console.log('Error updating');
        console.error(err);
      }
    } else if (action === 'delete') {
      try {
        const response = await axios.delete(`http://localhost:5555/events/${id}`);

        if (response.status === 204) {
          alert('Deleted');
          console.log(response);
        } else {
          console.log(response);
          console.log('Failed to delete');
        }
      } catch (err) {
        console.log('Error deleting');
        console.error(err);
      }
    }
  };

  return (
    <div id='event-form' className={isEventFormOpen ? 'show' : 'hide'} ref={formRef}>


      <form className='form' onSubmit={handleSubmit}>
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>

        <h2>Add an event</h2>
        <label htmlFor="title">Title</label>
        <input
          id='title'
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          id='description'
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          id='date'
          type='date'
          placeholder='Date'
          value={date}
        />

        <button
          type='submit'
          className='submit'
          onClick={(e) => handleSubmit(e, 'edit')}
        >
          Save changes
        </button>
        <button
          type='submit'
          className='submit'
          onClick={(e) => handleSubmit(e, 'delete')}
        >
          Delete
        </button>

      </form>
    </div>
  );
}

export default EditEventForm;