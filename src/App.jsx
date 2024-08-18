import React, { useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';
import './styles.css';

function App() {
  const [quote, setQuote] = useState({
    text: "Welcome to the Random Quote Machine!",
    author: "Author"
  });

  const [randomColor, setRandomColor] = useState('#000000');

  const calculateBrightness = (color) => {
    color = color.replace(/^#/, '');

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    return (0.2126 * r + 0.7152 * g + 0.0722 * b);
  };
  

  const getRandomColor = () => {
    let color;
    let brightness;
  
    do {
      const letters = '0123456789ABCDEF';
      color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      brightness = calculateBrightness(color);
    } while (brightness > 150); 
  
    return color;
  };
  

  const getNewQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': import.meta.env.VITE_API_KEY,
        },
      });
      const data = await response.json();
      
      if (data && data.length > 0) {
        const text = data[0].quote;
        if (text.length < 300){
          setQuote({ text: text, author: data[0].author });
          setRandomColor(getRandomColor())
        }
      }
      
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="App" style={{ 
      backgroundColor: randomColor,
      transition: 'background-color 1s ease-in-out' 
      }}>
      <QuoteBox quote={quote} 
      getNewQuote={getNewQuote}
      color={randomColor} />
    </div>
  );
}

export default App;
