import React from 'react'
import Countdown from '../components/Countdown';

const Explore = () => {
  return (
    <div className='explore'>
      <h1 className='not-found-title'>Coming soon</h1>
      <Countdown />
      {/*<p className='not-found-text'>Oops! The page you're looking for doesn't exist.</p> */}
      <a href='/' className='not-found-link'>Go back to homepage</a>
    </div>
  )
}

export default Explore