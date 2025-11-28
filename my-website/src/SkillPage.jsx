import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

// Map skills to their notes (array of objects with title and pdfPath)
// Each skill can have multiple notes
const skillNotes = {
  'Python': [], // Add notes like: [{ title: 'Python Basics', pdfPath: '/notes/python-basics.pdf' }]
  'Java & Spring Boot': [],
  'Machine Learning': [
    { title: 'Notes for Understanding Machine Learning', pdfPath: '/notes/ml_notes.pdf' }
  ],
  'Numerical Analysis': [],
  'DevOps (Docker/K8s)': [],
  'Physics': [
    { title: 'No-Scale Supergravity Notes', pdfPath: '/notes/no-scale-notes.pdf' }
  ]
};

function SkillPage() {
  const { skillName } = useParams();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);
  
  // Decode the skill name from URL (handles spaces and special characters)
  const decodedSkillName = decodeURIComponent(skillName);
  const notes = skillNotes[decodedSkillName] || [];

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div style={{ marginBottom: "32px" }}>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #00F5C4",
            color: "#00F5C4",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s ease",
            marginBottom: "24px"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
          }}
        >
          ← Back to Home
        </button>
      </div>

      <h2
        style={{
          color: "#00F5C4",
          marginBottom: "32px",
          marginTop: "0px",
          fontSize: "36px"
        }}
      >
        {decodedSkillName}
      </h2>

      <div
        style={{
          padding: "40px",
          backgroundColor: "rgba(0, 133, 122, 0.1)",
          border: "2px solid #00F5C4",
          borderRadius: "16px",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 20px rgba(0, 245, 196, 0.2)"
        }}
      >
        {selectedNote ? (
          // Show PDF viewer when a note is selected
          <>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <button
                onClick={() => setSelectedNote(null)}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00F5C4",
                  color: "#00F5C4",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  marginBottom: "16px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                ← Back to Notes List
              </button>
              <h3 style={{ color: "#00F5C4", margin: 0, fontSize: "24px" }}>
                {selectedNote.title}
              </h3>
            </div>
            <iframe
              src={selectedNote.pdfPath}
              style={{
                width: "100%",
                height: "700px",
                border: "none",
                borderRadius: "8px"
              }}
              title={selectedNote.title}
            />
          </>
        ) : notes.length > 0 ? (
          // Show list of notes
          <div style={{ textAlign: "left" }}>
            <h3 style={{ color: "#00F5C4", marginBottom: "24px", fontSize: "24px" }}>
              Available Notes
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notes.map((note, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedNote(note)}
                  style={{
                    padding: "16px 20px",
                    marginBottom: "12px",
                    backgroundColor: "rgba(0, 245, 196, 0.05)",
                    borderLeft: "3px solid #00F5C4",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 245, 196, 0.15)";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 245, 196, 0.05)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div style={{ 
                    color: "#00F5C4", 
                    fontSize: "18px", 
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <span>📄</span>
                    <span>{note.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // No notes available
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            minHeight: "400px",
            color: "#666",
            fontSize: "18px"
          }}>
            <p style={{ margin: 0, fontStyle: "italic" }}>
              No notes available for this skill yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillPage;

