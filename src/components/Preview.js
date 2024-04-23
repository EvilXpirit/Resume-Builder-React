import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";

const Preview = ({ data, onBack, onSubmit }) => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  React.useEffect(() => {
    const pdfBlob = new Blob([<PDFDocument data={data} />], { type: "application/pdf" });
    setPdfUrl(URL.createObjectURL(pdfBlob));

    return () => URL.revokeObjectURL(pdfUrl);
  }, [data]);


  return (
    <div className="preview">
      <h2>Preview</h2>
      <div>
        <img src={data.image} alt="User" />
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Job Title:</strong> {data.jobTitle}</p>
        <p><strong>Profile:</strong> {data.profile}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
        <p><strong>GitHub:</strong> {data.github}</p>
        <p><strong>High School:</strong> {data.highSchool}</p>
        <p><strong>Intermediate:</strong> {data.intermediate}</p>
        <p><strong>Diploma:</strong> {data.diploma}</p>
        <p><strong>Graduation:</strong> {data.graduation}</p>
        <p><strong>Post Graduation:</strong> {data.postGraduation}</p>
        <p><strong>Skills:</strong> {data.skills && data.skills.join(", ")}</p>
        {data.experiences && data.experiences.map((exp, index) => (
  <div key={index}>
<p><strong>Experience {index + 1}:</strong></p>
<p><strong>Heading:</strong> {exp.heading}</p>
<p><strong>Duration:</strong> {exp.duration}</p>
<p><strong>Description:</strong></p>
<ul>
  {exp.expDescription.split('\n').map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>

  </div>
))}

        <p><strong>Address:</strong> {data.address}</p>
      </div>
      <button className="button" onClick={onBack}>Back</button>
      <button className="button pdfbutton">
      <PDFDownloadLink  document={<PDFDocument data={data} />} style={{ textDecoration: 'none', color: 'white' }}  fileName="resume.pdf">
          {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </button>
      <div className="PDFViewer">
        <PDFViewer width="1000" height="1200">
          <PDFDocument data={data} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default Preview;
