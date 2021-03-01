import "./App.css";
import Mensaje from "./mensaje.js";

const Description = () => {
  return <p>Esta es una descripción</p>;
};

function App() {
  return (
    <div className="App">
      <Mensaje color="Red" message="Estamos trabajando en rojo" />
      <Mensaje color="Green" message="Estamos trabajando en verde" />
      <Description />
    </div>
  );
}

export default App;
