import { useState } from 'react';
import './App.css';

function App() {
  const [section, setSection] = useState('about'); // which page is active
  const [selectedSkill, setSelectedSkill] = useState(null); // which skill is selected for notes

  // Decide what to show in the main area
  const renderContent = () => {
    if (section === 'contact') {
      return (
        <>
          <h2 style={{ color: "#00F5C4", marginBottom: "24px" }}>Contact</h2>
    
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ioanna-stamou-2289612b3/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#00F5C4",
              fontSize: "20px",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            {/* LinkedIn SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#00F5C4"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
              2.761 2.239 5 5 5h14c2.762 0 5-2.239 
              5-5v-14c0-2.761-2.238-5-5-5zm-11 
              19h-3v-11h3v11zm-1.5-12.268c-.966 
              0-1.75-.79-1.75-1.764s.784-1.764 
              1.75-1.764 1.75.79 1.75 
              1.764-.784 1.764-1.75 1.764zm13.5 
              12.268h-3v-5.604c0-1.336-.027-3.055-1.861-3.055-1.861 
              0-2.146 1.454-2.146 
              2.958v5.701h-3v-11h2.879v1.507h.041c.401-.761 
              1.379-1.562 2.836-1.562 3.033 
              0 3.592 1.995 3.592 4.587v6.468z" />
            </svg>
    
            LinkedIn Profile
          </a>
        </>
      );
    }
    

    if (section === 'experience') {
      return (
        <>
          <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Working Experience</h2>
          <ul style={{ listStyle: "none", padding: 0, maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              UpcoMinds, Belgium — Junior Researcher (Software/ML)
            </li>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              Université libre de Bruxelles — Research Assistant
            </li>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              National &amp; Kapodistrian University of Athens — Research Associate
            </li>
          </ul>
        </>
      );
    }

    if (section === 'education') {
      return (
        <>
          <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Education</h2>
          <ul style={{ listStyle: "none", padding: 0, maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              Ph.D. Physics — National &amp; Kapodistrian University of Athen, Greece (2021)
            </li>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              M.Sc. Physics — National &amp; Kapodistrian University of Athen, Greece (2017)
            </li>
            <li style={{ 
              padding: "16px 20px", 
              marginBottom: "16px", 
              backgroundColor: "rgba(0, 245, 196, 0.05)", 
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}>
              B.Sc. Physics — National &amp; Kapodistrian University of Athen, Greece (2014)
            </li>
          </ul>
        </>
      );
    }

    if (section === 'projects') {
      return (
        <>
          <h2 style={{ color: "#00F5C4", marginBottom: "24px" }}>Projects</h2>
          <p>🚧 This page is under construction.</p>
        </>
      );
      
    }

    if (section === 'publications') {
      return (
        <>
          <h2 style={{ color: "#00F5C4", marginBottom: "24px" }}>Publications</h2>
    
          <ul style={{ lineHeight: "1.8", maxWidth: "900px" }}>
    
            <li>
              Mechanisms for producing Primordial Black Holes from Inflationary Models Beyond Fine-Tuning (2024) —
              <a href="https://arxiv.org/abs/2404.14321" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2404.14321</a>
            </li>
    
            <li>
              Reconstructing Primordial Black Hole Power Spectra from Gravitational Waves (2024) —
              <a href="https://arxiv.org/abs/2404.06547" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2404.06547</a>
            </li>
    
            <li>
              Large curvature fluctuations from no-scale supergravity with a spectator field (2024) —
              <a href="https://arxiv.org/abs/2404.02295" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2404.02295</a>
            </li>
    
            <li>
              Can Primordial Black Holes form in the Standard Model? (2023) —
              <a href="https://arxiv.org/abs/2312.06873" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2312.06873</a>
            </li>
    
            <li>
              Primordial Black Holes without fine-tuning from a light stochastic spectator field (2023) —
              <a href="https://arxiv.org/abs/2310.04174" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2310.04174</a>
            </li>
    
            <li>
              Exploring critical overdensity thresholds in inflationary models (2023) —
              <a href="https://arxiv.org/abs/2306.02758" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2306.02758</a>
            </li>
    
            <li>
              The CMSSM survives Planck, the LHC, LUX-ZEPLIN, Fermi-LAT, H.E.S.S., IceCube (2022) —
              <a href="https://arxiv.org/abs/2210.16337" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2210.16337</a>
            </li>
    
            <li>
              Primordial black holes and gravitational waves in multiaxion-Chern-Simons inflation (2022) —
              <a href="https://arxiv.org/abs/2206.07963" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2206.07963</a>
            </li>
    
            <li>
              Gravitational Waves From No-Scale Supergravity (2022) —
              <a href="https://arxiv.org/abs/2205.05595" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2205.05595</a>
            </li>
    
            <li>
              Gravitational Waves and Primordial Black Holes from Supersymmetric Hybrid Inflation (2021) —
              <a href="https://arxiv.org/abs/2108.05671" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2108.05671</a>
            </li>
    
            <li>
              Spectrum oscillations from features in the potential of single-field inflation (2021) —
              <a href="https://arxiv.org/abs/2106.02467" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2106.02467</a>
            </li>
    
            <li>
              Mechanisms of Producing Primordial Black Holes by Breaking SU(2,1)/SU(2)×U(1) Symmetry (2021) —
              <a href="https://arxiv.org/abs/2104.08654" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2104.08654</a>
            </li>
    
            <li>
              Features of the inflaton potential and the power spectrum of cosmological perturbations (2021) —
              <a href="https://arxiv.org/abs/2010.12483" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2010.12483</a>
            </li>
    
            <li>
              Primordial Black Holes from No-Scale Supergravity (2020) —
              <a href="https://arxiv.org/abs/2008.01457" target="_blank" style={{ color: "#00F5C4" }}>arXiv:2008.01457</a>
            </li>
    
            <li>
              CONFERENCE: Primordial Black Holes & Gravitational Waves Based On No Scale Supergravity (2021)
            </li>
    
          </ul>
        </>
      );
    }
    
    // default: About + Expertise
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2
          style={{
            color: "#00F5C4",
            marginBottom: "32px",
            marginTop: "0px"
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              flexShrink: 0
            }}
          >
            <img
              src="/WhatsApp%20Image%202025-11-25%20at%2023.05.08.jpeg"
              alt="Ioanna Stamou"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 60%",
                border: "4px solid #00F5C4",
                boxShadow: "0 8px 24px rgba(0, 245, 196, 0.3)"
              }}
            />
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              maxWidth: "500px",
              textAlign: "left"
            }}
          >
            <p
              style={{
                margin: 0,
                lineHeight: "1.8",
                fontSize: "18px"
              }}
            >
              PhD scientist and developer with strong experience in Python, Java, and
              machine learning. Passionate about building robust end-to-end systems
              and continuously learning.
            </p>
          </div>
        </div>

        <h2
          style={{
            color: "#00F5C4",
            marginBottom: "32px",
            marginTop: "0px"
          }}
        >
          Expertise
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          {['Python', 'Java & Spring Boot', 'Machine Learning', 'Numerical Analysis', 'DevOps (Docker/K8s)', 'Git'].map((skill) => (
            <div
              key={skill}
              onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              style={{
                padding: "12px 24px",
                backgroundColor: selectedSkill === skill ? "rgba(0, 245, 196, 0.2)" : "rgba(0, 245, 196, 0.1)",
                border: "1px solid #00F5C4",
                borderRadius: "24px",
                color: "#00F5C4",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {selectedSkill && (
          <div
            style={{
              marginTop: "50px",
              padding: "40px",
              backgroundColor: "rgba(0, 133, 122, 0.1)",
              border: "2px solid #00F5C4",
              borderRadius: "16px",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 4px 20px rgba(0, 245, 196, 0.2)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3
                style={{
                  color: "#00F5C4",
                  margin: 0,
                  fontSize: "28px"
                }}
              >
                {selectedSkill}
              </h3>
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00F5C4",
                  color: "#00F5C4",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Close
              </button>
            </div>
            <div
              style={{
                minHeight: "200px",
                padding: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "8px"
              }}
            >
              <p style={{ color: "#999", fontStyle: "italic", margin: 0, fontSize: "18px" }}>
                🚧 This section is under construction. Notes will be added here later.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  // helper style for active menu item
  const menuItemStyle = (key) => ({
    cursor: "pointer",
    margin: "10px 0",
    padding: "8px 12px",
    borderRadius: "8px",
    backgroundColor: section === key ? "#00857A" : "transparent",
    color: section === key ? "white" : "#00F5C4",
    border: "none",
    textAlign: "left",
    width: "100%",
    fontSize: "18px"
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",            // ⭐ now fills the whole window
        backgroundColor: "#1F1F1F",
        color: "white",
        fontFamily: "inherit",     // uses Aptos from App.css
        fontSize: "18px",          // bigger base font
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#111",
          padding: "24px 20px",
          borderRight: "2px solid #00857A",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img 
            src="/unnamed.jpg" 
            alt="Eagle Logo" 
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
          />
        </div>
        <h2
          style={{
            color: "#00F5C4",
            textAlign: "center",
            fontSize: "26px",
            marginTop: 0,
            marginBottom: "24px"
          }}
        >
          Menu
        </h2>

        <div style={{ marginTop: "10px" }}>
          <button style={menuItemStyle('about')} onClick={() => setSection('about')}>
            About &amp; Expertise
          </button>
          <button style={menuItemStyle('experience')} onClick={() => setSection('experience')}>
            Working Experience
          </button>
          <button style={menuItemStyle('education')} onClick={() => setSection('education')}>
            Education
          </button>
              <button style={menuItemStyle('projects')} onClick={() => setSection('projects')}>
                Projects
              </button>
           <button style={menuItemStyle('publications')} onClick={() => setSection('publications')}>
            Publications
          </button>
          <button style={menuItemStyle('contact')} onClick={() => setSection('contact')}>
            Contact
          </button>
        </div>
      </div>

      {/* MAIN AREA */}
      <div
        style={{
          flex: 1,
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box"
        }}
      >
        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#00857A",
            padding: "24px",
            borderRadius: "10px",
            marginBottom: "32px",
            textAlign: "center",
            width: "100%",
            maxWidth: "1100px",
            boxSizing: "border-box"
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "44px"
            }}
          >
            Ioanna Stamou
          </h1>
          <h2
            style={{
              margin: "8px 0 0",
              fontWeight: "normal",
              fontSize: "22px"
            }}
          >
            Researcher • Software/ML
          </h2>
        </div>

        {/* CONTENT AREA WITH FIXED MIN HEIGHT */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            minHeight: "460px",
            padding: "10px 20px 40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
