"use client"
import React, { useState } from 'react';
import "../../../Style/BookingForm.css"
import emailjs from '@emailjs/browser';

const BookingFormAbout = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    Message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_j0jqy15', 'template_ohfbfcb', formData, 'gJGiucIOoC9vTBLRp')
      .then((response) => {
        console.log('Success!', response.status, response.text);
        setFormData({
          name: '',
          contact: '',
          address: '',
          Message: ''
        });
      }, (error) => {
        console.error('Failed to send email. Error:', error);
      });
  };

  return (
    <div className='bookingFormcontainerMain ' id="first-section">
    <div className="bookingFormcontainer">
      <h2 className='bookingFormcontainerH' >Work with us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='bookingFormcontainerLabel' htmlFor="name">Name:</label>
          <input  className='bookingFormcontainerInput' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className='bookingFormcontainerLabel' htmlFor="contact">Contact:</label>
          <input className='bookingFormcontainerInput' type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label  className='bookingFormcontainerLabel' htmlFor="address">Address:</label>
          <input className='bookingFormcontainerInput' type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className='bookingFormcontainerLabel' htmlFor="bookingDate">Message</label>
          <input className='bookingFormcontainerInput' type="text" id="bookingDate" name="bookingDate" value={formData.Message} onChange={handleChange} required />
        </div>
        <button className='bookingFormcontainerBtn' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default BookingFormAbout;