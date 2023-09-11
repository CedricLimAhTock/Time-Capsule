import React, { useState } from 'react'
import sortIcon from '../../assets/Search.svg'
import './TimelineControl.css'
import EventForm from '../EventForm/EventForm.js'

const TimelineControl = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCustomOpen, setIsCustomOpen] = useState(false);
    const [isEventFormOpen, setIsEventFormOpen] = useState(false);

    const toggleSort = () => {
        setIsSortOpen(!isSortOpen)
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const toggleCustom = () => {
        setIsCustomOpen(!isCustomOpen)
    }

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

  return (
    <div className='timeline-control'>
        <button className='timeline-sort'  onClick={toggleSort}>Sort</button>
        <img className='search-icon' src={sortIcon} alt='sort-icon' onClick={toggleSearch} 
        style={{ display: isSearchOpen ? 'none' : 'inline-block' }}/>
        <input type='text' className='timeline-search' placeholder='Search' 
         style={{ display: isSearchOpen ? 'inline-block' : 'none' }}/>
        <button className='timeline-custom'  onClick={toggleCustom}>Custom</button>
        <button className='timeline-control'  onClick={toggleEventForm}>Add</button>
        {isEventFormOpen && <EventForm isEventFormOpen={isEventFormOpen} onClose={toggleEventForm} />}
    </div>
  )
}

export default TimelineControl