import './App.css';

const itemStyle = {
  padding: "16px 20px",
  marginBottom: "16px",
  backgroundColor: "rgba(0, 245, 196, 0.05)",
  borderLeft: "3px solid #00F5C4",
  borderRadius: "4px"
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "left"
};

function CareerPage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Working Experience & Education</h2>

      <h3 style={{ color: "#00F5C4", marginBottom: "16px", marginTop: "24px", fontSize: "20px" }}>
        Working Experience
      </h3>
      <ul style={listStyle}>
        <li style={itemStyle}>
          UpcoMinds, Belgium — Junior Researcher (Software/ML)
        </li>
        <li style={itemStyle}>
          Université libre de Bruxelles — Research Assistant
        </li>
        <li style={itemStyle}>
          National &amp; Kapodistrian University of Athens — Research Associate
        </li>
      </ul>

      <h3 style={{ color: "#00F5C4", marginBottom: "16px", marginTop: "32px", fontSize: "20px" }}>
        Education
      </h3>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>Ph.D. Physics</span> — National &amp; Kapodistrian University of Athens, Greece,
          <br />
          Department of Nuclear &amp; Particle Physics
        </li>
        <li style={itemStyle}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>M.Sc. Physics</span> — National &amp; Kapodistrian University of Athens, Greece,
          <br />
          Department of Nuclear &amp; Particle Physics
        </li>
        <li style={itemStyle}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>B.Sc. Physics</span> — National &amp; Kapodistrian University of Athens, Greece,
          <br />
          Department of Astrophysics, Astronomy and Mechanics
        </li>
      </ul>
    </>
  );
}

export default CareerPage;
