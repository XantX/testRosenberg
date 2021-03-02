import "./result.css";

const Result = (props) => {
  return (
    <div className="result">
      <h1> Resultado: {props.resultado} puntos </h1>
      <ul>
        <li>
          <strong> De 30 a 40 puntos: </strong> Autoestima elevada. Considerada como autoestima
          normal.
        </li>
        <li>
          <strong> De 26 a 29 puntos:</strong> Autoestima media. No presenta problemas de
          autoestima graves, pero es conveniente mejorarla.
        </li>
        <li>
          <strong> Menos de 25 puntos: </strong> Autoestima baja. Existen problemas significativos
          de autoestima.
        </li>
      </ul>
    </div>
  );
};
export default Result;
