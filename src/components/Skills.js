import React, { useState } from 'react';
import './Form.css';

const Skills = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({ skills: [] });
  const [skill, setSkill] = useState('');

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (skill.trim() !== '') {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
      setSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        {formData.skills.map((s, index) => (
          <div key={index} className="skill-item">
            {s}
            <button type="button"  onClick={() => handleRemoveSkill(index)}>Remove</button>
          </div>
        ))}
      </div>
      <input className="input" type="text" value={skill} onChange={handleChange} placeholder="Skill" required />
      <button className="button" type="button" onClick={handleAddSkill}>Add Skill</button>
        <button className="button" type="button" onClick={onBack}>Back</button>
        <button className="button" type="submit">Next</button>
    </form>
  );
};

export default Skills;
