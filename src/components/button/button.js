import "./button.css";

const Button = (props) => {
  return (
    <button
      className="ButtonScore"
      onClick={() => {
        props.scoreUpdate(props.score + props.value);
      }}
    >
      {props.letter}
    </button>
  );
};

export default Button;
