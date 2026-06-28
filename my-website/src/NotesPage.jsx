import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
  NOTE_GROUP_LABELS,
  NOTE_GROUP_ORDER,
  PHYSICS_EDUCATION_KEY,
  PHYSICS_EDUCATION_SUBCATEGORIES,
  IB_PHYSICS_TOPICS,
  getNotesForGroup,
  getPhysicsEducationSubcategoryNotes,
  getIBPhysicsTopicNotes,
  isPhysicsEducationSubcategory,
  isIBPhysicsTopic,
} from './skillNotes';
import { NoteFileIcon } from './NoteFileIcon';

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

const linkItemStyle = {
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
};

function parseNotesPath(pathname) {
  const rest = pathname.replace(/^\/notes\/?/, '');
  if (!rest) return [];
  return rest.split('/').map((segment) => decodeURIComponent(segment));
}

function notesPath(...segments) {
  return `/notes/${segments.map((s) => encodeURIComponent(s)).join('/')}`;
}

function NavButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
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
      {children}
    </button>
  );
}

function LinkList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map(({ key, label, to }) => (
        <li key={key} style={{ marginBottom: '12px' }}>
          <Link
            to={to}
            style={linkItemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 245, 196, 0.15)';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 245, 196, 0.05)';
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
      ))}
    </ul>
  );
}

function NotesViewer({ notes, selectedNote, setSelectedNote, emptyMessage }) {
  if (selectedNote) {
    return (
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
    );
  }

  if (notes.length > 0) {
    return (
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}>
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
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 196, 0.15)';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 196, 0.05)';
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
    );
  }

  return (
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
      <p style={{ margin: 0, fontStyle: 'italic' }}>{emptyMessage}</p>
    </div>
  );
}

function NotesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);
  const segments = parseNotesPath(location.pathname);

  useEffect(() => {
    setSelectedNote(null);
  }, [location.pathname]);

  const [groupName, subcategory, topicKey] = segments;

  // ——— First level: all topic groups ———
  if (segments.length === 0) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          Notes
        </h2>
        <p style={{ color: '#aaa', marginTop: '-16px', marginBottom: '28px', fontSize: '16px' }}>
          Here you can find some notes.
        </p>

        <div style={boxStyle}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}>Topics</h3>
            <LinkList
              items={NOTE_GROUP_ORDER.map((key) => ({
                key,
                label: NOTE_GROUP_LABELS[key] || key,
                to: notesPath(key),
              }))}
            />
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <NavButton onClick={() => navigate('/')}>← Back to Home</NavButton>
        </div>
      </div>
    );
  }

  if (!NOTE_GROUP_ORDER.includes(groupName)) {
    return <Navigate to="/notes" replace />;
  }

  // ——— Physics (education): subcategories ———
  if (groupName === PHYSICS_EDUCATION_KEY && segments.length === 1) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          Physics (education)
        </h2>
        <p style={{ color: '#aaa', marginTop: '-16px', marginBottom: '28px', fontSize: '16px' }}>
          Choose a subcategory.
        </p>

        <div style={boxStyle}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}>
              Subcategories
            </h3>
            <LinkList
              items={PHYSICS_EDUCATION_SUBCATEGORIES.map(({ key, label }) => ({
                key,
                label,
                to: notesPath(PHYSICS_EDUCATION_KEY, key),
              }))}
            />
          </div>
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
          <NavButton onClick={() => navigate('/notes')}>← All topics</NavButton>
          <NavButton onClick={() => navigate('/')}>← Home</NavButton>
        </div>
      </div>
    );
  }

  // ——— Physics (education) → IB Physics: syllabus topics A–E ———
  if (
    groupName === PHYSICS_EDUCATION_KEY &&
    segments.length === 2 &&
    subcategory === 'IB Physics'
  ) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          IB Physics
        </h2>
        <p style={{ color: '#aaa', marginTop: '-16px', marginBottom: '28px', fontSize: '16px' }}>
          IB Diploma syllabus topics.
        </p>

        <div style={boxStyle}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#00F5C4', marginBottom: '24px', fontSize: '24px' }}>Topics</h3>
            <LinkList
              items={IB_PHYSICS_TOPICS.map(({ key, label }) => ({
                key,
                label,
                to: notesPath(PHYSICS_EDUCATION_KEY, 'IB Physics', key),
              }))}
            />
          </div>
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
          <NavButton onClick={() => navigate(notesPath(PHYSICS_EDUCATION_KEY))}>
            ← Physics (education)
          </NavButton>
          <NavButton onClick={() => navigate('/notes')}>← All topics</NavButton>
        </div>
      </div>
    );
  }

  // ——— Physics (education) → IB Physics → topic ———
  if (
    groupName === PHYSICS_EDUCATION_KEY &&
    segments.length === 3 &&
    subcategory === 'IB Physics' &&
    isIBPhysicsTopic(topicKey)
  ) {
    const topicLabel = IB_PHYSICS_TOPICS.find((t) => t.key === topicKey)?.label ?? topicKey;
    const notes = getIBPhysicsTopicNotes(topicKey);

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          {topicLabel}
        </h2>

        <div style={boxStyle}>
          <NotesViewer
            notes={notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            emptyMessage="No notes available for this topic yet."
          />
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
          <NavButton onClick={() => navigate(notesPath(PHYSICS_EDUCATION_KEY, 'IB Physics'))}>
            ← IB Physics
          </NavButton>
          <NavButton onClick={() => navigate(notesPath(PHYSICS_EDUCATION_KEY))}>
            ← Physics (education)
          </NavButton>
        </div>
      </div>
    );
  }

  // ——— Physics (education) → other subcategory (e.g. Greek national Examination) ———
  if (
    groupName === PHYSICS_EDUCATION_KEY &&
    segments.length === 2 &&
    isPhysicsEducationSubcategory(subcategory) &&
    subcategory !== 'IB Physics'
  ) {
    const subLabel =
      PHYSICS_EDUCATION_SUBCATEGORIES.find((s) => s.key === subcategory)?.label ?? subcategory;
    const notes = getPhysicsEducationSubcategoryNotes(subcategory);

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          {subLabel}
        </h2>

        <div style={boxStyle}>
          <NotesViewer
            notes={notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            emptyMessage="No notes available for this subcategory yet."
          />
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
          <NavButton onClick={() => navigate(notesPath(PHYSICS_EDUCATION_KEY))}>
            ← Physics (education)
          </NavButton>
          <NavButton onClick={() => navigate('/notes')}>← All topics</NavButton>
        </div>
      </div>
    );
  }

  // Invalid Physics (education) path
  if (groupName === PHYSICS_EDUCATION_KEY) {
    return <Navigate to={notesPath(PHYSICS_EDUCATION_KEY)} replace />;
  }

  // ——— Other topics (including Physics research): flat notes list ———
  if (segments.length === 1) {
    const topicLabel = NOTE_GROUP_LABELS[groupName] || groupName;
    const notes = getNotesForGroup(groupName);

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#00F5C4', marginBottom: '32px', marginTop: '0px', fontSize: '36px' }}>
          {topicLabel}
        </h2>

        <div style={boxStyle}>
          <NotesViewer
            notes={notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            emptyMessage="No notes available for this topic yet."
          />
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
          <NavButton onClick={() => navigate('/notes')}>← All topics</NavButton>
          <NavButton onClick={() => navigate('/')}>← Home</NavButton>
        </div>
      </div>
    );
  }

  return <Navigate to={notesPath(groupName)} replace />;
}

export default NotesPage;
