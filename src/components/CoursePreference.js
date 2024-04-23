import React, { useState } from 'react';
import './Form.css';

const CoursePreference = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({ course: '', category: '' });

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
      <div className="input-group">
        <label htmlFor="course">Choose a Course:</label>
        <select className="input" name="course" id="course" value={formData.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="Diploma">Diploma</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="category">Choose a Category:</label>
        <select className="input" name="category" id="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Cyber Security Courses">Cyber Security Courses</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Data Science">Data Science</option>
          <option value="Business Analytics">Business Analytics</option>
          <option value="Engineering & Technology">Engineering & Technology</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Information Technology">Information Technology</option>
          <option value="IT Software">IT Software</option>
          <option value="Law">Law</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Media and Mass Communication">Media and Mass Communication</option>
          <option value="Medicine & Allied Health Sciences">Medicine & Allied Health Sciences</option>
        </select>
      </div>
      <button className="button" type="submit">Next</button>
      <button className="button" type="button" onClick={onBack}>Back</button>
    </form>
  );
};

export default CoursePreference;
