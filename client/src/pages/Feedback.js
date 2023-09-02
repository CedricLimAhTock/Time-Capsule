import React, { useState } from 'react';
import './style/Feedback.css';

const Feedback = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dropdown: 'Feedback', // default value
    message: ''
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className='form-container'>
      <h1 className='form-title'>Feedback Form</h1>
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={form.name}
          onChange={handleChange}
          className='form-input'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={form.email}
          onChange={handleChange}
          className='form-input'
        />
        <select
          className='form-dropdown'
          name='dropdown'
          value={form.dropdown}
          onChange={handleChange}
        >
          <option disabled value=''>
            Select an option
          </option>
          <option value='Feedback'>Feedback</option>
          <option value='Report'>Report</option>
          <option value='Inquiry'>Inquiry</option>
          <option value='Other'>Other</option>
        </select>
        <textarea
          placeholder='Message'
          name='message'
          value={form.message}
          onChange={handleChange}
          className='form-textarea'
        />
        <button type='submit' className='form-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
