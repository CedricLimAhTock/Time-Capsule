import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import UserForm from './UserForm';
import { ReactComponent as User } from '../../assets/user.svg';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    if (isFormOpen) {
      setIsFormOpen(false);
      document.body.style.overflow = 'auto'; // Restore scrolling when form is closed
    } else {
      setIsFormOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when form is open
    }
  };

  return (
    <header className="header">
      <div className="left-section">
        <NavLink exact to="/" className="logo-link">Time Capsule</NavLink>
      </div>
      <div className="right-section">
        <nav className="nav-links">
          <NavLink exact to="/" className="space" activeClassName="active-link">Home</NavLink>
          <NavLink to="/explore" className="space" activeClassName="active-link">Explore</NavLink>
          <NavLink to="/feedback" className="space" activeClassName="active-link">Feedback</NavLink>
        </nav>
        <div className="icon" onClick={toggleForm}>
          <User />
        </div>
      </div>
      <UserForm isOpen={isFormOpen} onClose={toggleForm} />
    </header>
  );
};

export default Header;
