function Experience() {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  };

  const jobStyles = {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const jobTitleStyles = {
    fontWeight: "bold",
    fontSize: "1.2em",
  };

  const companyStyles = {
    color: "#777",
  };

  return (
    <div style={containerStyles}>
      <h2>Experience</h2>
      <div style={jobStyles}>
        <p style={jobTitleStyles}>Fullstack Dev </p>
        <p style={companyStyles}> Upwork - from Jan 2022</p>
        <ul>
          <li>Code Optimization</li>
          <li> Smooth UX</li>
          <li>Handle Testing & Deployment</li>
        </ul>
      </div>
      <div style={jobStyles}>
        <p style={jobTitleStyles}>MERN Stack Dev</p>
        <p style={companyStyles}> Hoods Hub - May 2023 to July 2023</p>
        <ul>
          <li>Assisted in building front-end</li>
          <li>Contributed to a major refactor of internal tools.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
