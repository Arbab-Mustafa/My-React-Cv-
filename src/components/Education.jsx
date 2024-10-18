import React from 'react';

function Education() {
    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '20px',
        '@media (max-width: 600px)': {
          gridTemplateColumns: '1fr', 
        },
      };

  const educationItemStyles = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const degreeStyles = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  };

  const institutionStyles = {
    color: '#777',
  };

  return (
    <div style={containerStyles}>
      <h2>Education</h2>
      <div style={educationItemStyles}>
        <p style={degreeStyles}>Bachelor's in Software Engineering</p>
        <p style={institutionStyles}>University of Engineering and Technology Taxila - 2022 to 2026</p>
        <p>Graduated with distinction. Major coursework in algorithms, software design, and networking.</p>
      </div>
      <div style={educationItemStyles}>
        <p style={degreeStyles}>Fsc (Pre-Engineering)</p>
        <p style={institutionStyles}>Punjab Group of Colleges Okara - 2020 to 2022</p>
        <p>Top 10% of graduating class. Focused on mathematics, physics, and chemistry.</p>
      </div>
    </div>
  );
}

export default Education;
