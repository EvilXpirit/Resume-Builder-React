import React, { useState } from 'react';
import './Form.css';

const ContactDetails = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({ email: '', phoneNumber: '', linkedin: '', github: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input className="input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input className="input" type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn (Optional)" />
      <input className="input" type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub (Optional)" />
      <button className="button" onClick={onBack}>Back</button>
      <button className="button" type="submit">Next</button>
    </form>
  );
};

export default ContactDetails;
