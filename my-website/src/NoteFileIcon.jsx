/** Inline “emoji-sized” marker for each note file (public asset). */
export function NoteFileIcon({ size = 22 }) {
  return (
    <img
      src="/unnamed2.jpg"
      alt=""
      aria-hidden
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'cover',
        borderRadius: '50%',
        flexShrink: 0,
        display: 'block',
      }}
    />
  );
}
