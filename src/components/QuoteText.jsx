import React from 'react';

function QuoteText({ text, color }) {
  const style = {
    color: color,
    transition: 'color 1s ease-in-out',
  }
  return <p className="quote-text" style = {style}>"{text}"</p>;
}

export default QuoteText;
