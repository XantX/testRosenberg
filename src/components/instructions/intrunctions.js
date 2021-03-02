import "./instructions.css";
const Instructions = () => {
  return (
    <div className="instructions">
      <h1>Test de Rosenberg</h1>
      <p className="fontInstructions">
        Este test tiene por objeto evaluar el sentimiento de satisfacción que la
        persona tiene de si misma. Por favor, conteste las siguientes frases con
        la respuesta que considere más apropiada.
      </p>

      <ul className="fontInstructions">
        <li>A. Muy de acuerdo</li>
        <li>B. De acuerdo</li>
        <li>C. En desacuerdo</li>
        <li>D. Muy en desacuerdo</li>
      </ul>

    </div>
  );
};
export default Instructions;
