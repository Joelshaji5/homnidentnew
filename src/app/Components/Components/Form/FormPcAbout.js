"use client"
import React, { useState } from 'react';
import "../../../Style/Form.css"
import emailjs from '@emailjs/browser';

function FormPCAbout() {


  const [formDataNew, setFormDataNew] = useState({
    name: '',
    contact: '',
    address: '',
    bookingDate: '',
    last_name:'',
    Email:''
  });

  const handleChange = (e) => {
    setFormDataNew({ ...formDataNew, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_j0jqy15', 'template_vtvg79l', formDataNew, 'gJGiucIOoC9vTBLRp')
      .then((response) => {
        alert('Form submitted successfully!');

        console.log('Success!', response.status, response.text);
        setFormDataNew({
          name: '',
          contact: '',
          address: '',
          bookingDate: '',
          last_name:'',
          Email:''
        });
      }, (error) => {
        console.error('Failed to send email. Error:', error);
      });
  };



  return (
    <div className='flex formDivAbout FormMainDiv' id="Form-section">
    <div className='w-[50%] form1stDiv'></div>
    <div className='w-[50%]'>
        <h1 className="formHeading" >Register for a Home <br></br> Consultation here !</h1>
        <form
            onSubmit={handleSubmit}
            className="flex formInsideDivInput"
            id="contact-form"
          >
            <div className="fromInSideDiv">
              <input
                type="text"
                id="name"
                name="name"
                className="firstnamebox FormInput"
                placeholder="First Name*"
                value={formDataNew.name} onChange={handleChange} required
                style={{ '::placeholder': { color: 'red' } }} 

              />

              <br></br>

              <input
                type="text"
                id="last_Name"
                name="last_name"
                className='FormInput placeholder-red'
                placeholder="Last Name*"
                value={formDataNew.last_name} onChange={handleChange} required
                style={{color: 'red'}} // Change 'red' to the desired color

              />


       
        

              <br></br>

              <input
                type="email"
                placeholder="Email Address**"
                name="Email"
                id='email'
                className='FormInput'
                value={formDataNew.Email} onChange={handleChange} required

              />

              <br></br>

              <input  type="number"  className='FormInput' id="number"  name="contact" placeholder="Phone Number*" value={formDataNew.contact} onChange={handleChange} required  // value={formData.last_name}    // onChange={handleChange}
/>
              <br></br>
              <input type="submit"  value="Book A Consultation Now"  className="submitFormBtn"/>
            </div>
            
          </form>


    </div>



    </div>
  )
}

export default FormPCAbout