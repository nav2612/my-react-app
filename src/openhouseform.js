import React, { useState } from 'react';
import firebase from './firebase.js';

const openhouseform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [property, setProperty] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      property,
      message
    };
    firebase.database().ref('forms').push(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div>
        <label htmlFor="property">Property:</label>
        <input type="text" id="property" value={property} onChange={e => setProperty(e.target.value)} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default openhouseform;
