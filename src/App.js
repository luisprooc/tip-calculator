import { Container } from "reactstrap";
import Calculator from "./components/Calculator.jsx";
import "./App.css";

const App = () => {
  return (
    <Container className="App" fluid="sm">
      <div className="App">
        <h4 className="title">SPLI <br/> TTER</h4>
        <Calculator />
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/luisprooc" rel="noopener">
            Luis Miguel Rosario Suarez
          </a>
          .
        </div>
      </div>
    </Container>
  );
};

export default App;
