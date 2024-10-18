import React from 'react';

function Experience() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
  };

  const jobStyles = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const jobTitleStyles = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  };

  const companyStyles = {
    color: '#777',
  };

  return (
    <div style={containerStyles}>
      <h2>Experience</h2>
      <div style={jobStyles}>
        <p style={jobTitleStyles}>Assistant Database Administration</p>
        <p style={companyStyles}>ABC Tech Company - Jan 2023 to Dec 2023</p>
        <ul>
          <li>Query Optimization</li>
          <li>Querying and Reporting</li>
          <li>Handle Database Works</li>
        </ul>
      </div>
      <div style={jobStyles}>
        <p style={jobTitleStyles}>Intern</p>
        <p style={companyStyles}>XYZ Innovations - May 2023 to July 2023</p>
        <ul>
          <li>Assisted in building front-end components for e-commerce applications.</li>
          <li>Contributed to a major refactor of internal tools.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
