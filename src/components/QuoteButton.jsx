import React from 'react';

function QuoteButton({ onClick, color }) {
  const style = {
    backgroundColor: color,
    transition: 'background-color 1s ease-in-out'
  }
  return (
    <button className="quote-button" onClick={onClick} style={style}>
      Get New Quote
    </button>
  );
}

export default QuoteButton;
