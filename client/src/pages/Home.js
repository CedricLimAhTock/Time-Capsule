import React from 'react';
import './style/Home.css';

// Import or provide the image URL
import imageUrl from '../assets/temp.png'; // Replace with your image URL

const Home = () => {
  return (
    <div className='hero'>
      <div className='left-container'>
        <p className='hero-title'>Welcome to Time Capsule</p>
        <p className='hero-text-header'>Your Digital Memory Bank</p>
        <p className='hero-text1'>Introducing Time Capsule, where your memories find a home and stay forever. Just like
          your favourite search engine, we've designed Time Capsule to be your personal memory finder.</p>

        <div className='hero-text-list'>
          <p className='hero-text2'>Capture the essence of your life's journey:</p>
          <ul className='hero-list'>
            <li>Birthdays, vacations, achievements, and more</li>
            <li>Relieve it all with a quick search</li>
          </ul>
        </div>
        <form className='beta-form'>
          <div><input type='email' placeholder='user@example.com' className='hero-input' /></div>
          <input type='submit' value='Sign Up for Beta Access!' className='hero-button' />
        </form>
      </div>

      <div className='right-container'>
        <img src={imageUrl} alt='Time Capsule Product' />
        {/* <Countdown /> */}
      </div>
    </div>
  );
};

export default Home;
