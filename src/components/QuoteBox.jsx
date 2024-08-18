import React from 'react';
import QuoteText from './QuoteText';
import Author from './Author';
import QuoteButton from './QuoteButton';

function QuoteBox({ quote, getNewQuote, color }) {
  return (
    <div className="quote-box">
      <QuoteText text={quote.text} color={color}/>
      <Author author={quote.author} color={color} />
      <QuoteButton onClick={getNewQuote} color={color}/>
    </div>
  );
}

export default QuoteBox;
