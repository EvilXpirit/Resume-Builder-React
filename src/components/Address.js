import React, { useState } from 'react';
import './Form.css';

const Address = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({ address: '', city: '', state: '', zip: '' });

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
      <input className="input" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input className="input" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input className="input" type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
      <input className="input" type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" required />
      <button className="button" type="submit">Next</button>
      <button className="button" type="button" onClick={onBack}>Back</button>
    </form>
  );
};

export default Address;
