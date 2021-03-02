import "./question.css";
import Button from "../button/button";
import { useState } from "react";

const Question = ({
  score,
  scoreUpdate,
  questionNumber,
  question = "Default question",
  values,
}) => {
  const [state, updateEstate] = useState(false);
  return (
    <div className="question">
      <h2>{questionNumber}</h2>
      <h4>{question}</h4>
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[0]}
        letter="A"
        disabled={state}
        updateEstate={updateEstate}
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[1]}
        letter="B"
        disabled={state}
        updateEstate={updateEstate}
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[2]}
        letter="C"
        disabled={state}
        updateEstate={updateEstate}
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[3]}
        letter="D"
        disabled={state}
        updateEstate={updateEstate}
      />
    </div>
  );
};

export default Question;
