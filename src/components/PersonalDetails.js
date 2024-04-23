import React, { useState } from 'react';
import './Form.css';

const PersonalDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({ name: '', jobTitle: '', dob: '', profile: '', image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input className="input" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" />
      <input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <textarea className="input" name="profile" value={formData.profile} onChange={handleChange} placeholder="Profile" required />
      <input className="input" type="file" name="image" onChange={handleFileChange} accept="image/*" required />
      <button className="button" type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;
