import { Link } from 'react-router-dom';
import './App.css';

function AboutPage() {
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
           Hello! Welcome to my personal website. I'm a researcher in theoretical physics and a developer working with Python, Java, and machine learning. I enjoy building complete, reliable systems and learning new things along the way.
           Here you'll find my publications, projects, and notes from my work and interests.
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
        {['Python', 'Java & Spring Boot', 'Machine Learning', 'Numerical Analysis', 'Physics', 'DevOps (Docker/K8s)'].map((skill) => {
          const skillUrl = `/skill/${encodeURIComponent(skill)}`;
          return (
            <Link
              key={skill}
              to={skillUrl}
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(0, 245, 196, 0.1)",
                border: "1px solid #00F5C4",
                borderRadius: "24px",
                color: "#00F5C4",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }}
            >
              {skill}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AboutPage;
