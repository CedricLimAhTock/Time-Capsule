import React, { useRef, useEffect, useState } from 'react';
import './EventForm.css';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import axios from 'axios';

const EventForm = ({ isEventFormOpen, onClose }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isEventFormOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEventFormOpen, onClose]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5555/events', { 
        "title": title.toString(), 
        "description": description.toString(), 
        "date": date
      });

      if(response.status === 201) {
        alert('Created');
        console.log(response);
      } else {
        console.log(response);
        console.log("nope");
      }
    } catch (err) {
      console.log("err")
      console.log(err);
    }


  }

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
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description</label>
      <input 
        id='description' 
        type='text' 
        placeholder='Description' 
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="date">Date</label>
      <input 
          id='date' 
          type='date' 
          placeholder='Date' 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

      <button type='submit' className='submit'>Add</button>
    </form>
  </div>
);
}

export default EventForm;
