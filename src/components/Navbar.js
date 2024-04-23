import React from 'react';

const Navbar = ({ step, setStep, isFormFilled, handleSubmit }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">Logo</div>
            <div className="navbar-right">
                <a href="#">Home</a>
                {step < 5 && <button className="dashboard-button" onClick={() => setStep(6)}>Dashboard</button>}
                {isFormFilled && step < 5 && <button onClick={handleSubmit}>Preview</button>}
            </div>
        </nav>
    );
};

export default Navbar;
