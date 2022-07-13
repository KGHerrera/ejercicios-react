import React from 'react'

const SongLyric = ({ title, lyrics }) => {
  return (
    <div>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap", color: "white" }}>{lyrics}</blockquote>
    </div>
  );
};

export default SongLyric