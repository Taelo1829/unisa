
import React, { useEffect, useState } from 'react';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => {
        const shuffled = data.sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
      });
  }, []);

  const handleAnswer = (option) => {
    if (!showAnswer) {
      if (option === questions[current].answer) {
        setScore(score + 1);
      }
      setShowAnswer(true);
    }
  };

  const nextQuestion = () => {
    setCurrent(current + 1);
    setShowAnswer(false);
  };



  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div >
      <h2>Question {current + 1} of {questions.length}</h2>
      <p>{questions[current].question}</p>
      <ul>
        {questions[current].options.map((opt, idx) => (
          <li key={idx}>
            <button onClick={() => handleAnswer(opt)} disabled={showAnswer}>
              {opt}
            </button>
          </li>
        ))}
      </ul>
      {showAnswer && (
        <div>
          <p>Correct Answer: {questions[current].answer}</p>
          {current + 1 < questions.length ? (
            <button onClick={nextQuestion}>Next</button>
          ) : (
            <p>Your score: {score} / {questions.length}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
