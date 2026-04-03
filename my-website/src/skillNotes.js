/** Order shown on /notes (first level). Excludes standalone keys merged into a group below. */
export const NOTE_GROUP_ORDER = [
  'Physics',
  'Python',
  'Machine Learning',
  'Software Engineering Stack',
  'Numerical Analysis',
];

/** Short labels for the notes index (keys are internal skillNotes keys). */
export const NOTE_GROUP_LABELS = {
  Physics: 'Physics',
  Python: 'Python',
  'Machine Learning': 'Machine Learning',
  'Software Engineering Stack': 'Software Engineering',
  'Numerical Analysis': 'Numerical Analysis',
};

/**
 * Notes for a topic group. Software Engineering Stack also includes Java & Spring Boot
 * (deduped by pdfPath).
 */
export function getNotesForGroup(groupKey) {
  if (groupKey === 'Software Engineering Stack') {
    const a = skillNotes['Software Engineering Stack'] || [];
    const b = skillNotes['Java & Spring Boot'] || [];
    const seen = new Set();
    const merged = [];
    for (const n of [...a, ...b]) {
      if (!seen.has(n.pdfPath)) {
        seen.add(n.pdfPath);
        merged.push(n);
      }
    }
    return merged;
  }
  return skillNotes[groupKey] || [];
}

// Map skills to their notes (array of objects with title and pdfPath)
export const skillNotes = {
  Python: [
    { title: 'Python notes', pdfPath: '/notes/python.pdf' },
    { title: 'Big Data Analytics with Hadoop', pdfPath: '/notes/spark.pdf' },
  ],
  'Java & Spring Boot': [
    { title: 'Java Spring Boot Notes', pdfPath: '/notes/java_spring.pdf' },
  ],
  'Software Engineering Stack': [
    { title: 'Java Spring Boot Notes', pdfPath: '/notes/java_spring.pdf' },
    { title: 'Basic Frontend React Notes', pdfPath: '/notes/Basic_Frontend_react.pdf' },
    { title: ' Basic SQL Notes ', pdfPath: '/notes/sql.pdf' },
    { title: 'Docker and Kubernetes Notes', pdfPath: '/notes/docker.pdf' },
  ],
  'Machine Learning': [
    { title: 'Notes for Understanding Machine Learning', pdfPath: '/notes/ml_notes.pdf' },
  ],
  'Numerical Analysis': [],
  Physics: [
    { title: 'No-Scale Supergravity Notes', pdfPath: '/notes/no-scale-notes.pdf' },
  ],
};
