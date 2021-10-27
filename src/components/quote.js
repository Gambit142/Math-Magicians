import React, { useState, useEffect } from 'react';

const QuotePage = () => {
  let text = '‘Obvious’ is the most dangerous word in mathematics. - Eric Temple Bell';
  const [state, updateState] = useState(text);
  const quoteList = [
    'Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein',
    'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. - Shakuntala Devi',
    'Mathematics is not about numbers, equation, computations or algorithms; it is about understanding - William Paul Thurston',
    'What is mathematics? It is only a systematic effort of solving puzzles posed by nature. - Shakuntala Devi',
    'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. - Albert Einstein',
  ];

  useEffect(() => {
    setInterval(() => updateState(
      (quoteList[Math.floor(Math.random() * quoteList.length)]),
    ), 10000);
  }, []);

  useEffect(() => () => {
    text = '';
  }, []);
  return (
    <div className="quote-div">
      <p>{state}</p>
    </div>
  );
};

export default QuotePage;
