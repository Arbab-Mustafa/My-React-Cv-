import "./App.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const appStyles = {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px",
  };

  return (
    <div style={appStyles}>
      <About
        username="Muhammad Arbab"
        title="Software Engineering Student"
        imageUrl="https://www.arbabmustafa.com/_next/image?url=%2Fprofile.jpeg&w=256&q=95"
      />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
