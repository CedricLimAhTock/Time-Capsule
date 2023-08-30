import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './UserForm.css';

const UserForm = ({ isOpen, onClose }) => {
  return (
    <div className={`user-form ${isOpen ? 'open' : ''}`}>
      <div className="form-content">
        <h2 className='form-title'> Time Capsule account</h2>
        <div className="form-group">
          <Logo />
          <div className='text'>
            <h1 className='log-header'>Log into your account</h1>
            <p>Log into an existing Time Capsule account or create a new one.
               With a Time Capsule account, you can manage your memories and
                access personalized features.</p>
            <p>You can log in or sign up for a Time Capsule account using your email or Google account</p>
          </div>

          <Link to="/login" className="btn">Sign up or log in with email</Link>
          {/* <Link to="/login" className="btn btn-primary">Sign up or log in with Google</Link> */}
        </div>
      </div>
      <button className="close-btn" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default UserForm;
