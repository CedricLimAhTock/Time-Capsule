import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import UserForm from './UserForm';
import { ReactComponent as User } from '../../assets/user.svg';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        <NavLink exact to="/" className="logo-link">Time Capsule</NavLink>
      </div>
      <div className="right-section">
        <nav className="nav-links">
          <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
          <NavLink to="/explore" activeClassName="active-link">Explore</NavLink>
          <NavLink to="/support" activeClassName="active-link">Support</NavLink>
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
