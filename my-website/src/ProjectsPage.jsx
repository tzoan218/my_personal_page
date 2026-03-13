import './App.css';

function ProjectsPage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Projects</h2>
      
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left"
        }}
      >
        <div
          style={{
            padding: "24px",
            marginBottom: "24px",
            backgroundColor: "rgba(0, 245, 196, 0.05)",
            borderLeft: "3px solid #00F5C4",
            borderRadius: "4px"
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <a
              href="http://cosmology.ioanna-stamou.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexShrink: 0,
                display: "block",
                textDecoration: "none",
                borderRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(0, 245, 196, 0.35)",
                boxShadow: "0 4px 12px rgba(0, 245, 196, 0.15)",
                transition: "box-shadow 0.25s ease, border-color 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 245, 196, 0.25)";
                e.currentTarget.style.borderColor = "rgba(0, 245, 196, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 245, 196, 0.15)";
                e.currentTarget.style.borderColor = "rgba(0, 245, 196, 0.35)";
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "120px",
                  overflow: "hidden"
                }}
              >
                <img
                  src="/cosmological-perturbations.png"
                  alt="Cosmological Perturbations"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top"
                  }}
                />
              </div>
            </a>
            <div style={{ flex: "1", minWidth: "200px" }}>
              <h3 style={{ color: "#00F5C4", marginTop: 0, marginBottom: "12px" }}>
                Cosmological Perturbations
              </h3>
              <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
                A full stack app to compute the inflationary cosmological perturbations for n fields
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="http://cosmology.ioanna-stamou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#00F5C4",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Project's Site
                </a>
                <a
                  href="https://cosmopetr.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#00F5C4",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  (Or alternatively)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "24px",
            marginBottom: "24px",
            backgroundColor: "rgba(0, 245, 196, 0.05)",
            borderLeft: "3px solid #00F5C4",
            borderRadius: "4px"
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <a
              href="https://learning-french.ioanna-stamou.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexShrink: 0,
                display: "block",
                textDecoration: "none",
                borderRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(0, 245, 196, 0.35)",
                boxShadow: "0 4px 12px rgba(0, 245, 196, 0.15)",
                transition: "box-shadow 0.25s ease, border-color 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 245, 196, 0.25)";
                e.currentTarget.style.borderColor = "rgba(0, 245, 196, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 245, 196, 0.15)";
                e.currentTarget.style.borderColor = "rgba(0, 245, 196, 0.35)";
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "120px",
                  overflow: "hidden"
                }}
              >
                <img
                  src="/learning-french-vocabulary.png"
                  alt="Learning French Vocabulary"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top"
                  }}
                />
              </div>
            </a>
            <div style={{ flex: "1", minWidth: "200px" }}>
              <h3 style={{ color: "#00F5C4", marginTop: 0, marginBottom: "12px" }}>
                Learning French Vocabulary
              </h3>
              <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
                Do not need to memorize the words, just play some games and learn them! 
                A full stack app to help you learn French vocabulary.
              </p>
              <a
                href="https://learning-french.ioanna-stamou.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00F5C4",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "16px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
                Project's Site
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "24px",
            marginBottom: "24px",
            backgroundColor: "rgba(0, 245, 196, 0.05)",
            borderLeft: "3px solid #00F5C4",
            borderRadius: "4px"
          }}
        >
          <h3 style={{ color: "#00F5C4", marginTop: 0, marginBottom: "12px" }}>
            Map Measurement  
          </h3>
          <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
             A full-stack app that measures length and area on a map.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://mapmeasurement.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00F5C4",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
              Project's Site
            </a>
          </div>
        </div>
        <div
          style={{
            padding: "24px",
            marginBottom: "24px",
            backgroundColor: "rgba(0, 245, 196, 0.05)",
            borderLeft: "3px solid #00F5C4",
            borderRadius: "4px"
          }}
        >
          <h3 style={{ color: "#00F5C4", marginTop: 0, marginBottom: "12px" }}>
            BWithB
          </h3>
          <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
            A full-stack application which is built through many AI agents.
          </p>
          <a
            href="https://github.com/tzoanphys/ai-coding-power-demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#00F5C4",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
        
        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(0, 245, 196, 0.03)",
            border: "1px dashed #00F5C4",
            borderRadius: "8px",
            textAlign: "center",
            color: "#999"
          }}
        >
          <p style={{ margin: 0, fontSize: "18px" }}>
            🚧 More projects coming soon... 🚧
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;

