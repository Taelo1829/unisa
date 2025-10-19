
import React, { useState, useEffect } from 'react';
import questions from './questions.json';
import './App.css';
import Header from './Header';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === shuffledQuestions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrent(current + 1);
    setShowAnswer(false);
    setSelected(null);
  };



  if (current >= shuffledQuestions.length) {
    return (
      <div>
        <h1>Quiz Complete!</h1>
        <p>Your score: {score} / {shuffledQuestions.length}</p>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  const q = shuffledQuestions[current];

  return (
    <div>
      <Header />
      <div className='card'>
        <p>{q.question}</p>
        {q.options.map((opt, idx) => (
          <div key={idx}
            onClick={() => handleAnswer(opt)}
            disabled={showAnswer}
            className='answer'
            style={{
              backgroundColor: showAnswer ?
                opt === q.answer ? 'green' :
                  opt === selected ? 'red' : '' : '',
              color: showAnswer && (opt === q.answer || opt === selected) ? "#fff" : ''
            }}>
            {opt}
          </div>
        ))}

      </div>
      <div className='next'>
        <div>
          Score: {score} / {shuffledQuestions.length}
        </div>
        <div>
          {showAnswer && <button onClick={nextQuestion}>Next</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
