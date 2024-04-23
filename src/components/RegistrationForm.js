import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Address from "./Address";
import EducationDetails from "./EducationDetails";
import Skills from "./Skills";
import Experience from "./Experience"; 
import Preview from "./Preview";
import Dashboard from "./Dashboard";
import "./Form.css";

const steps = [
  { id: 1, name: "Personal Details" },
  { id: 2, name: "Contact Details" },
  { id: 3, name: "Address" },
  { id: 4, name: "Education Details" },
  { id: 5, name: "Skills" }, 
  { id: 6, name: "Experience" },
];

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(7);
    window.alert("Form submitted successfully!");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails onNext={handleNext} />;
      case 2:
        return <ContactDetails onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Address onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <EducationDetails onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Skills onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <Experience onNext={handleNext} onBack={handleBack} />;
      case 7:
        return (
          <Preview
            data={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      case 8:
        return <Dashboard data={formData} onReset={handleReset} onBack={handleBack} />;
      default:
        return null;
    }
  };

  const isFormFilled = Object.keys(formData).length === 4;

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">Resume Builder</div>
        <div className="navbar-right">
          <a href="#" onClick={() => setStep(1)}>
            Home
          </a>
          {step < 8 && (
            <button className="dashboard-button" onClick={() => setStep(7)}>
              Preview
            </button>
          )}
          {isFormFilled && step < 7 && (
            <button onClick={handleSubmit}>Preview</button>
          )}
        </div>
      </nav>
      <div className="progress-bar">
        {steps.map((s) => (
          <div
            key={s.id}
            className={`step ${step >= s.id ? "active" : ""}`}
            onClick={() => setStep(s.id)}
          >
            {s.name}
          </div>
        ))}
      </div>
      <div className="registration-form">{renderStep()}</div>
    </div>
  );
};

export default RegistrationForm;
