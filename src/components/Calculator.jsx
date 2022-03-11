import { useState } from "react";
import { Row, Col } from "reactstrap";
import "./calculator.css";
import { ReactComponent as IconDollar } from "./images/icon-dollar.svg";

const Calculator = () => {
  const [tipAmount, setTipAmount] = useState((0.0).toFixed(2));
  const [total, setTotal] = useState((0.0).toFixed(2));
  const [totalPeople, setTotalPeople] = useState(0);
  const [bill, setBill] = useState(0);

  const reset = () => {
    setTipAmount((0.0).toFixed(2));
    setTotal((0.0).toFixed(2));
  };

  return (
    <Row className="cal-container">
      <Col lg="7">
        <div className="cal-container-inputs">
          <label className="cal-label-inputs" for="bill" id="cal-label-bill">
            Bill
          </label>{" "}
          <br />
          <input className="cal-inputs" placeholder={bill} />
        </div>
        <div className="cal-container-inputs">
          <label className="cal-label-inputs">Select Tip %</label> <br />
          <Row className="g-0">
            <Col>
              <button className="cal-tip-btn">5%</button>
            </Col>
            <Col>
              <button className="cal-tip-btn">10%</button>
            </Col>
            <Col>
              <button className="cal-tip-btn">15%</button>
            </Col>
            
          </Row>
        </div>
        <div className="cal-container-inputs">
          <label className="cal-label-inputs">Number of People</label> <br />
          <input className="cal-inputs" placeholder={totalPeople} />
        </div>
      </Col>
      <Col className="cal-total-box" lg="5">
        <Row className="mb-4">
          <Col>
            <p>
              Tip Amount <br />{" "}
              <span className="cal-span-person">/ person</span>
            </p>
          </Col>
          <Col>
            <div className="test">
              <p className="cal-total-digits">
                <span>
                  <IconDollar width={35} height={35} />{" "}
                </span>{" "}
                {tipAmount}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>
              Total <br /> <span className="cal-span-person">/ person</span>
            </p>
          </Col>
          <Col>
            <p className="cal-total-digits">
              <span>
                <IconDollar width={35} height={35} />{" "}
              </span>{" "}
              {total}
            </p>
          </Col>
        </Row>
        <Row className="cal-total-row-btn">
          <Col className="mx-auto text-center">
            <button className="cal-total-btn" onClick={reset}>
              RESET
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Calculator;
