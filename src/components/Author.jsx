import React from 'react';

function Author({ author, color }) {
  const style = {
    color: color,
    transition: 'color 1s ease-in-out'
  }
  return <p className="quote-author" style={style}>- {author}</p>;
}

export default Author;
