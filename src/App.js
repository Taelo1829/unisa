
import React, { useState, useEffect } from 'react';
import questions from './questions.json';
import './App.css';
import Header from './Header';
import RenderQuestion from './components/RenderQuestion';
import RenderAnswers from './components/RenderAnswers';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const randomQuestions = generateRandomQuestions()
    setShuffledQuestions(randomQuestions);
  }, []);

  function generateRandomQuestions() {
    let sectionCount = {}
    let results = []
    let existingIndexes = []
    let it = 0
    while (results.length < 80) {
      //random index
      let ri = parseInt(Math.random() * questions.length - 1)
      if (!existingIndexes.includes(ri)) {
        let question = questions[ri]
        if (!sectionCount[question.section]) sectionCount[question.section] = 1
        if ((sectionCount[question.section] < 20 || !question.section) && !answeredQuestions.includes(question.id)) {
          sectionCount[question.section]++
          results.push(question)
          it = 0
        } else if (answeredQuestions.includes(question.id)) {
          it++
          if (it > 3) {
            it = 0
            results.push(question)
          }
        }
      }
    }

    return results
  }

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === shuffledQuestions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    let answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions") ?? "[]")
    setCurrent(current + 1);
    setShowAnswer(false);
    setSelected(null);
    answeredQuestions.push(q.id)
    localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions))
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
        <RenderQuestion question={q.question} type={q.type} data={q.data} section={q.section} />
        <RenderAnswers answer={q.answer} handleAnswer={handleAnswer} options={q.options} selected={selected}
          showAnswer={showAnswer} type={q.answerType} />
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
