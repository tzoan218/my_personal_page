import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  NOTE_GROUP_LABELS,
  NOTE_GROUP_ORDER,
  getNotesForGroup,
} from './skillNotes';
import { NoteFileIcon } from './NoteFileIcon';

function NotesPage() {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);

  const decodedGroup = groupName ? decodeURIComponent(groupName) : null;
  const isValidGroup =
    decodedGroup && NOTE_GROUP_ORDER.includes(decodedGroup);

  useEffect(() => {
    setSelectedNote(null);
  }, [decodedGroup]);

  if (groupName && !isValidGroup) {
    return <Navigate to="/notes" replace />;
  }

  const boxStyle = {
    padding: '40px',
    backgroundColor: 'rgba(0, 133, 122, 0.1)',
    border: '2px solid #00F5C4',
    borderRadius: '16px',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 4px 20px rgba(0, 245, 196, 0.2)',
  };

  // ——— First level: topic groups ———
  if (!decodedGroup) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2
          style={{
            color: '#00F5C4',
            marginBottom: '32px',
            marginTop: '0px',
            fontSize: '36px',
          }}
        >
          Notes
        </h2>
        <p
          style={{
            color: '#aaa',
            marginTop: '-16px',
            marginBottom: '28px',
            fontSize: '16px',
          }}
        >
          Choose a topic to see the notes for that area.
        </p>

        <div style={boxStyle}>
          <div style={{ textAlign: 'left' }}>
            <h3
              style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}
            >
              Topics
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {NOTE_GROUP_ORDER.map((key) => {
                const label = NOTE_GROUP_LABELS[key] || key;
                const to = `/notes/${encodeURIComponent(key)}`;
                return (
                  <li key={key} style={{ marginBottom: '12px' }}>
                    <Link
                      to={to}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: 'rgba(0, 245, 196, 0.05)',
                        borderLeft: '3px solid #00F5C4',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'inherit',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(0, 245, 196, 0.15)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(0, 245, 196, 0.05)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span
                        style={{
                          color: '#00F5C4',
                          fontSize: '18px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <NoteFileIcon />
                        <span>{label}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #00F5C4',
              color: '#00F5C4',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 245, 196, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ——— Second level: notes for one topic ———
  const topicLabel = NOTE_GROUP_LABELS[decodedGroup] || decodedGroup;
  const notes = getNotesForGroup(decodedGroup);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h2
        style={{
          color: '#00F5C4',
          marginBottom: '32px',
          marginTop: '0px',
          fontSize: '36px',
        }}
      >
        {topicLabel}
      </h2>

      <div style={boxStyle}>
        {selectedNote ? (
          <>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <button
                type="button"
                onClick={() => setSelectedNote(null)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #00F5C4',
                  color: '#00F5C4',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  marginBottom: '16px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 245, 196, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                ← Back to notes list
              </button>
              <h3 style={{ color: '#00F5C4', margin: 0, fontSize: '24px' }}>
                {selectedNote.title.trim()}
              </h3>
            </div>
            <iframe
              src={selectedNote.pdfPath}
              style={{
                width: '100%',
                height: '700px',
                border: 'none',
                borderRadius: '8px',
              }}
              title={selectedNote.title}
            />
          </>
        ) : notes.length > 0 ? (
          <div style={{ textAlign: 'left' }}>
            <h3
              style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}
            >
              Available notes
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {notes.map((note, index) => (
                <li
                  key={`${note.pdfPath}-${index}`}
                  onClick={() => setSelectedNote(note)}
                  style={{
                    padding: '16px 20px',
                    marginBottom: '12px',
                    backgroundColor: 'rgba(0, 245, 196, 0.05)',
                    borderLeft: '3px solid #00F5C4',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'rgba(0, 245, 196, 0.15)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'rgba(0, 245, 196, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      color: '#00F5C4',
                      fontSize: '18px',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <NoteFileIcon />
                    <span>{note.title.trim()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              color: '#666',
              fontSize: '18px',
            }}
          >
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              No notes available for this topic yet.
            </p>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/notes')}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #00F5C4',
            color: '#00F5C4',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 245, 196, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          ← All topics
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #00F5C4',
            color: '#00F5C4',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 245, 196, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          ← Home
        </button>
      </div>
    </div>
  );
}

export default NotesPage;
