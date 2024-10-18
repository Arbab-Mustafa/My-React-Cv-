import React from "react";

function About({ username, title, imageUrl }) {
  const aboutStyles = {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const nameStyles = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const titleStyles = {
    fontSize: "1.5em",
    color: "#555",
    marginTop: "10px",
  };

  const imageStyles = {
    width: "150px", // Adjust size as needed
    height: "150px",
    borderRadius: "50%", // Makes the image circular
    marginBottom: "15px",
    objectFit: "cover", // Ensures the image covers the area nicely
  };

  const contactStyles = {
    marginTop: "15px",
    fontSize: "1em",
    color: "#333",
  };

  return (
    <div style={aboutStyles}>
      <img src={imageUrl} alt={`${username}'s profile`} style={imageStyles} />
      <p style={nameStyles}>{username}</p>
      <p style={titleStyles}>{title}</p>
      <h3 style={{ color: "#555" }}>About Me</h3>
      <p>
        I am a Software Engineering student at UET Taxila, passionate about
        developing innovative solutions and enhancing user experiences through
        technology. With a solid foundation in web engineering, databases, and
        data structures, I have honed my skills in building efficient and
        scalable applications. I am well-versed in the coursework relevant to my
        5th semester, which has equipped me with a comprehensive understanding
        of software development principles.
        <br />
        In addition to my technical expertise, I have developed strong soft
        skills, enabling me to collaborate effectively in team settings and
        communicate complex ideas clearly. I am eager to apply my knowledge and
        skills in practical projects and continue my growth in the dynamic field
        of software engineering.
      </p>
      <p style={contactStyles}>
        Contact: <a href="https://www.arbabmustafa.com"> arbabmustafa.com</a> |
        Phone: 03225305671
      </p>
    </div>
  );
}

export default About;
