import "./App.css";
import Question from "./questions/question";
import questions from "./questions/questionTask";
import Instructions from "./instructions/intrunctions"
import { useState } from "react";

function App() {
  const [score, scoreUpdate] = useState(0);
  console.log(score);
  console.log(questions);
  return (
    <div className="App">
      <Instructions/>
      {questions.map((singleQuestion) => (
        <Question
          score={score}
          scoreUpdate={scoreUpdate}
          questionNumber={singleQuestion.questionNumber}
          question={singleQuestion.question}
          values={singleQuestion.scorePoints}
        />
      ))}
      <h1>Tu score final es: {score}</h1>
    </div>
  );
}

export default App;
