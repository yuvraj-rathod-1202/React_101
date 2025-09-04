import React, {useState} from 'react';
import './css/App.css';
import { questions } from './data/data';
// TODO: Import the QuestionCard component they will create

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    console.log("TODO: write code of handleAnswerClick");
  };

  return (
    <div>
      {/* TODO: Add Logic to show score if submitted the answers */}
      {/* TODO: add QuestionCard component here */}
    </div>
  );
}

export default App;
