import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Earth', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Vietnam'],
    correctAnswer: 'Japan',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1905', '1912', '1920', '1931'],
    correctAnswer: '1912',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correctAnswer: 'Yen',
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    options: ['Oxygen', 'Gold', 'Carbon', 'Iron'],
    correctAnswer: 'Oxygen',
  },
  {
    question: 'Who was the first President of the United States?',
    options: ['John Adams', 'George Washington', 'Thomas Jefferson', 'Abraham Lincoln'],
    correctAnswer: 'George Washington',
  },
  // Add more questions as needed
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score is ${score}/${questions.length}`);
      // You can reset the quiz or redirect to another page here
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>Question {currentQuestion + 1}</p>
      <h3>{questions[currentQuestion].question}</h3>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
      <p>Score: {score}</p>
    </div>
  );
}

export default App;
