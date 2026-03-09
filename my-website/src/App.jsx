import { useState } from 'react';
import { useLocation, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import SkillPage from './SkillPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CareerPage from './CareerPage';
import ProjectsPage from './ProjectsPage';
import PublicationsPage from './PublicationsPage';
import ContactPage from './ContactPage';

function App() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // helper style for horizontal nav bar items
  const navBarItemStyle = (path) => {
    const isActive = location.pathname === path && !location.pathname.startsWith('/skill');
    return {
      padding: "12px 20px",
      backgroundColor: isActive ? "#00857A" : "transparent",
      color: isActive ? "white" : "#00F5C4",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: isActive ? "600" : "400",
      borderRadius: "6px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "none",
      whiteSpace: "nowrap"
    };
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#1F1F1F",
        color: "white",
        fontFamily: "inherit",
        fontSize: "18px",
        position: "relative"
      }}
    >
      {/* MENU BUTTON */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="mobile-menu-button"
        style={{
          display: "block",
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1001,
          backgroundColor: "#00F5C4",
          border: "none",
          color: "#111",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "24px",
          boxShadow: "0 2px 8px rgba(0, 245, 196, 0.3)"
        }}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 999
          }}
        />
      )}

      {/* LEFT SIDEBAR */}
      <div
        className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}
        style={{
          width: "280px",
          backgroundColor: "#111",
          padding: "24px 20px",
          borderRight: "2px solid #00857A",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          flexShrink: 0
        }}
      >
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "12px",
          marginBottom: "24px"
        }}>
          <img 
            src="/unnamed2.jpg" 
            alt="Eagle Logo" 
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain"
            }}
          />
          <h2
            style={{
              color: "#00F5C4",
              fontSize: "26px",
              margin: 0
            }}
          >
            Menu
          </h2>
        </div>

        {/* Fields of Interest Section */}
        <div style={{ marginTop: "10px" }}>
          {['Physics', 'Python', 'Machine Learning', 'Java & Spring Boot', 'Numerical Analysis'].map((skill) => {
            const skillUrl = `/skill/${encodeURIComponent(skill)}`;
            const isActive = location.pathname === skillUrl;
            return (
              <Link
                key={skill}
                to={skillUrl}
                style={{
                  cursor: "pointer",
                  margin: "8px 0",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "#00857A" : "transparent",
                  color: isActive ? "white" : "#00F5C4",
                  border: "none",
                  textAlign: "left",
                  width: "100%",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "block",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                {skill}
              </Link>
            );
          })}
        </div>
      </div>

      {/* MAIN AREA */}
      <div
        className="main-content"
        style={{
          flex: 1,
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100%"
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
            className="header-title"
            style={{
              margin: 0,
              fontSize: "32px"
            }}
          >
            Ioanna Stamou
          </h1>
          <h2
            className="header-subtitle"
            style={{
              margin: "8px 0 0",
              fontWeight: "normal",
              fontSize: "18px"
            }}
          >
            Physicist • Software Engineer • Machine Learning
          </h2>
        </div>

        {/* HORIZONTAL NAVIGATION BAR */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            marginBottom: "32px",
            backgroundColor: "#111",
            padding: "12px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
            boxSizing: "border-box"
          }}
        >
          <Link
            to="/"
            style={navBarItemStyle('/')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={navBarItemStyle('/about')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/about') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/about') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            About
          </Link>
          <Link
            to="/career"
            style={navBarItemStyle('/career')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/career') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/career') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            Experience &amp; Education
          </Link>
          <Link
            to="/projects"
            style={navBarItemStyle('/projects')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/projects') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/projects') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            Projects
          </Link>
          <Link
            to="/publications"
            style={navBarItemStyle('/publications')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/publications') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/publications') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            Publications
          </Link>
          <Link
            to="/contact"
            style={navBarItemStyle('/contact')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/contact') {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/contact') {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            Contact
          </Link>
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
          <Routes>
            <Route path="/skill/:skillName" element={<SkillPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
