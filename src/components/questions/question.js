import "./question.css";
import Button from "../button/button";

const Question = ({
  score,
  scoreUpdate,
  questionNumber,
  question = "Default question",
  values,
}) => {
  return (
    <div className="question">
      <h1>{questionNumber}</h1>
      <h3>{question}</h3>
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[0]}
        letter="A"
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[1]}
        letter="B"
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[2]}
        letter="C"
      />
      <Button
        score={score}
        scoreUpdate={scoreUpdate}
        value={values[3]}
        letter="D"
      />
    </div>
  );
};

export default Question;
