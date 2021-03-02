import "./result.css";

const Result = (props) => {
  return (
    <div className="result">
      <h1> Resultado: {props.resultado} puntos </h1>
      <h2 className="fontResult">
        <strong>
          Los resultados obtenidos en estos tests son orientativos, puesto que
          el diagnóstico debe ser realizado siempre por un psicólogo
          profesional.
        </strong>
      </h2>
    </div>
  );
};
export default Result;
