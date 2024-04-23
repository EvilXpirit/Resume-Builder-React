import React, { useState } from 'react';
import './Form.css';

const EducationDetails = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({ highSchool: '', intermediate: '', diploma: '', graduation: '', postGraduation: '' });

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
      <input className="input" type="text" name="highSchool" value={formData.highSchool} onChange={handleChange} placeholder="High School Details" required />
      <input className="input" type="text" name="intermediate" value={formData.intermediate} onChange={handleChange} placeholder="Intermediate Details" required />
      <input className="input" type="text" name="diploma" value={formData.diploma} onChange={handleChange} placeholder="Diploma Details (Optional)" />
      <input className="input" type="text" name="graduation" value={formData.graduation} onChange={handleChange} placeholder="Graduation Details (Optional)" />
      <input className="input" type="text" name="postGraduation" value={formData.postGraduation} onChange={handleChange} placeholder="Post Graduation Details (Optional)" />
      <button className="button" type="submit">Next</button>
      <button className="button" type="button" onClick={onBack}>Back</button>
    </form>
  );
};

export default EducationDetails;
