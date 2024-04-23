import React from 'react';

const Dashboard = ({ data, onReset, onBack }) => {
  const handleDelete = () => {
    // Implement delete functionality
  };

  const goBack = () => {
    onBack(); // Call the onBack function passed as a prop
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>
        <img src={data.image} alt="User" />
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>High School:</strong> {data.highSchool}</p>
        <p><strong>Intermediate:</strong> {data.intermediate}</p>
        <p><strong>Diploma:</strong> {data.diploma}</p>
        <p><strong>Graduation:</strong> {data.graduation}</p>
        <p><strong>Post Graduation:</strong> {data.postGraduation}</p>
        <p><strong>Course:</strong> {data.course}</p>
        <p><strong>Category:</strong> {data.category}</p>
        {/* Display other details */}
      </div>
      <button className="button" onClick={handleDelete}>Delete</button>
      <button className="button" onClick={onReset}>Reset</button>
      <button className="button" onClick={goBack}>Back</button>
    </div>
  );
};

export default Dashboard;
