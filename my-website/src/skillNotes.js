/** Order shown on /notes (first level). Excludes standalone keys merged into a group below. */
export const NOTE_GROUP_ORDER = [
  'Physics',
  'Physics (education)',
  'Python',
  'Machine Learning',
  'Software Engineering Stack',
  'Numerical Analysis',
];

/** Short labels for the notes index (keys are internal skillNotes keys). */
export const NOTE_GROUP_LABELS = {
  Physics: 'Physics',
  'Physics (education)': 'Physics (education)',
  Python: 'Python',
  'Machine Learning': 'Machine Learning',
  'Software Engineering Stack': 'Software Engineering',
  'Numerical Analysis': 'Numerical Analysis',
};

export const PHYSICS_EDUCATION_KEY = 'Physics (education)';

/** Subcategories under Physics (education) */
export const PHYSICS_EDUCATION_SUBCATEGORIES = [
  { key: 'IB Physics', label: 'IB Physics' },
  { key: 'Greek national Examination', label: 'Greek national Examination' },
];

/** IB Diploma Physics syllabus topics (Table 4 overview) */
export const IB_PHYSICS_TOPICS = [
  { key: 'A', label: 'A. Space, time and motion' },
  { key: 'B', label: 'B. The particulate nature of matter' },
  { key: 'C', label: 'C. Wave behaviour' },
  { key: 'D', label: 'D. Fields' },
  { key: 'E', label: 'E. Nuclear and quantum physics' },
];

export function isPhysicsEducationSubcategory(key) {
  return PHYSICS_EDUCATION_SUBCATEGORIES.some((s) => s.key === key);
}

export function isIBPhysicsTopic(key) {
  return IB_PHYSICS_TOPICS.some((t) => t.key === key);
}

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

export function getPhysicsEducationSubcategoryNotes(subcategoryKey) {
  return physicsEducationNotes[subcategoryKey] || [];
}

export function getIBPhysicsTopicNotes(topicKey) {
  return ibPhysicsNotes[topicKey] || [];
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
  'Physics (education)': [],
};

/** Direct notes under a Physics (education) subcategory (non-IB) */
const physicsEducationNotes = {
  'Greek national Examination': [],
};

/** IB Physics notes keyed by syllabus topic (A–E) */
const ibPhysicsNotes = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
};
