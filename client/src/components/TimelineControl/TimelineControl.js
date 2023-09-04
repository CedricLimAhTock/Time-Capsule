import React, { useState } from 'react'
import sortIcon from '../../assets/Search.svg'
import './TimelineControl.css'

const TimelineControl = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCustomOpen, setIsCustomOpen] = useState(false);

    const toggleSort = () => {
        setIsSortOpen(!isSortOpen)
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const toggleCustom = () => {
        setIsCustomOpen(!isCustomOpen)
    }

  return (
    <div className='timeline-control'>
        <button className='timeline-sort'  onClick={toggleSort}>Sort</button>
        <img className='search-icon' src={sortIcon} alt='sort-icon' onClick={toggleSearch} 
        style={{ display: isSearchOpen ? 'none' : 'inline-block' }}/>
        <input type='text' className='timeline-search' placeholder='Search' 
         style={{ display: isSearchOpen ? 'inline-block' : 'none' }}/>
        <button className='timeline-custom'  onClick={toggleCustom}>Custom</button>
    </div>
  )
}

export default TimelineControl