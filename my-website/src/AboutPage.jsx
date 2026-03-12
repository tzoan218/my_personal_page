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
            src="/img_001_linkdl_002.jpg"
            alt="Ioanna Stamou"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 55%",
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
            I am a physicist with a PhD in cosmology and gravitational waves and working experience in software development and machine learning.
          </p>
          <p style={{ margin: "1em 0 0", lineHeight: "1.8", fontSize: "18px" }}>
            My work focuses on building and developing tools for scientific and educational applications. I have experience in coding such as Python, Fortran and Java. I am excited about exploring machine learning frameworks, and cloud infrastructure.
          </p>
          <p style={{ margin: "1em 0 0", lineHeight: "1.8", fontSize: "18px" }}>
            I am interested in the intersection of research, software engineering, and artificial intelligence, and I enjoy developing codes.
          </p>
          <p style={{ margin: "1em 0 0", lineHeight: "1.8", fontSize: "18px" }}>
            If you would like to see more about my work, you can also visit my <a href="https://github.com/tzoanphys" target="_blank" rel="noopener noreferrer" style={{ color: "#00F5C4", textDecoration: "none" }}>GitHub profile</a>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "200px",
          paddingTop: "40px",
          borderTop: "2px solid rgba(0, 245, 196, 0.2)",
          width: "100%",
          textAlign: "center"
        }}
      >
        <p
          style={{
            color: "#888",
            fontSize: "16px",
            margin: 0,
            fontStyle: "italic",
            letterSpacing: "0.5px"
          }}
        >
          Created by{" "}
          <span
            style={{
              color: "#00F5C4",
              fontWeight: "500"
            }}
          >
            Ioanna Stamou
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
