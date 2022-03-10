import { useState } from "react";
import { Row, Col } from "reactstrap";
import "./calculator.css";
import { IconDollar } from './images/icon-dollar.jsx'

const Calculator = () => {
  const [tipAmount, setTipAmount] = useState(0.00.toFixed(2));
  const [total, setTotal] = useState(0.00.toFixed(2));

  const reset = () => {
    setTipAmount(0.00.toFixed(2));
    setTotal(0.00.toFixed(2));
  }

  return (
    <Row className="cal-container">
      <Col lg="7">
        <div>
          <label>Bill</label> <br/>
          <input/>  
        </div>
        <div>
          <label>Select Tip %</label> <br/>
          <input/>  
        </div>
        <div>
          <label>Number of People</label> <br/>
          <input/>  
        </div>
      </Col>
      <Col className="cal-total-box" lg="5">
        <Row className="mb-4">
          <Col>
            <p>Tip Amount <br /> <span className="cal-span-person">/{" "} person</span></p>
          </Col>
          <Col>
            <div className="test">
              <p className="cal-total-digits"><span><IconDollar width={35} height={35}/> </span> {tipAmount}</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>Total <br /> <span className="cal-span-person">/{" "} person</span></p>
          </Col>
          <Col>
            <p className="cal-total-digits"><span><IconDollar width={35} height={35}/> </span>  {total}</p>
          </Col>
        </Row>
        <Row className="cal-total-row-btn">
          <Col className="mx-auto text-center">
            <button className="cal-total-btn" onClick={reset}>RESET</button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Calculator;
