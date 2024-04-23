import React, { useState } from 'react';
import './Form.css';

const Experience = ({ onNext, onBack }) => {
  const [experiences, setExperiences] = useState([{ heading: '', duration: '', expDescription: '' }]);
  
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setExperiences(prevExperiences => {
      return prevExperiences.map((exp, idx) => {
        if (idx === index) {
          return { ...exp, [name]: value };
        }
        return exp;
      });
    });
  };
  

  const handleAddExperience = () => {
    setExperiences([...experiences, { heading: '', duration: '', expDescription: '' }]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(experiences);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <input className="input" type="text" name="heading" value={exp.heading} onChange={(e) => handleChange(index, e)} placeholder="Heading" required />
          <input className="input" type="text" name="duration" value={exp.duration} onChange={(e) => handleChange(index, e)} placeholder="Duration" required />
          <textarea className="input" name="expDescription" value={exp.expDescription} onChange={(e) => handleChange(index, e)} placeholder="Description" required />
          {index !== 0 && <button className="button" type="button" onClick={() => handleRemoveExperience(index)}>Remove</button>}
        </div>
      ))}
      <button className="button" type="button" onClick={handleAddExperience}>Add Experience</button>
      <button className="button" onClick={onBack}>Back</button>
      <button className="button" type="submit">Next</button>
    </form>
  );
};

export default Experience;
