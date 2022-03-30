import { useState, useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";
import "./calculator.css";
import { ReactComponent as IconDollar } from "./images/icon-dollar.svg";

const Calculator = () => {
  const [tipAmount, setTipAmount] = useState((0.0).toFixed(2));
  const [total, setTotal] = useState((0.0).toFixed(2));
  const [totalPeople, setTotalPeople] = useState("");
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const btnRef = useRef(null);
  const btnValues = [5, 10, 15, 25, 50];

  const reset = () => {
    setBill("");
    setTip("");
    setTotalPeople("");
    setTipAmount((0.0).toFixed(2));
    setTotal((0.0).toFixed(2));
  };

  const splitter = () => {
    const amount = tip / 100;
    const totalPerPerson = (parseFloat(bill) + parseFloat(bill) * amount) / totalPeople;
    setTotal(totalPerPerson.toFixed(2));

    const totalTipPerPerson = parseFloat(bill) * amount / totalPeople;
    setTipAmount(totalTipPerPerson.toFixed(2));

  }

  useEffect(() => {
    if (bill && tip && totalPeople) {
      btnRef.current.disabled = false;
      splitter();
    }

    // else if(bill && tip && totalPeople == null){
    //   alert("MMG")
    // }
    else {
      btnRef.current.disabled = true;
    }
  }, [tip, bill, totalPeople]);

  return (
    <Row className="cal-container">
      <Col xs="12" lg="6">
        <div className="cal-container-inputs">
          <label
            className="cal-label-inputs"
            htmlFor="bill"
            id="cal-label-bill"
          >
            Bill
          </label>{" "}
          <br />
          <input
            className="cal-inputs"
            placeholder={0}
            onInput={(e) => setBill(e.target.value)}
            maxLength={22}
            value={bill}
          />
        </div>
        <div className="cal-container-inputs">
          <label className="cal-label-inputs" htmlFor="tip">
            Select Tip %
          </label>{" "}
          <br />
          <Row>
            {btnValues.map((value) => (
              <Col xs="6" sm="4" key={value}>
                <button
                  className={
                    parseInt(tip) === value
                      ? "cal-tip-btn mb-3 cal-tip-btn-selected"
                      : "cal-tip-btn mb-3"
                  }
                  onClick={(e) => setTip(parseInt(e.target.value))}
                  value={value.toString()}
                >
                  {value}%
                </button>
              </Col>
            ))}
            <Col xs="6" sm="4">
              <input
                id="cal-tip-input"
                placeholder="Custom"
                onInput={(e) => setTip(parseInt(e.target.value))}
                maxLength={3}
              />
            </Col>
          </Row>
        </div>
        <div className="cal-container-inputs">
          <label
            className="cal-label-inputs"
            id="cal-label-people"
            htmlFor="people"
          >
            Number of People
          </label>{" "}
          <br />
          <input
            className="cal-inputs"
            placeholder={0}
            maxLength={22}
            onInput={(e) => setTotalPeople(e.target.value)}
            value={totalPeople}
          />
        </div>
      </Col>
      <Col className="cal-total-box" xs="12" lg="6">
        <Row className="mb-4 justify-content-between">
          <Col xs="12" sm="6">
            <p className="cal-person">
              Tip Amount <br />{" "}
              <span className="cal-span-person">/ person</span>
            </p>
          </Col>
          <Col xs="12" sm="6" className="mx-auto">
            <div className="mx-auto">
              <p className="cal-total-digits">
                <span>
                  <IconDollar width={35} height={35} />
                </span>
                {tipAmount}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-between">
          <Col xs="12" sm="6">
            <p className="cal-person">
              Total <br /><span className="cal-span-person">/ person</span>
            </p>
          </Col>
          <Col xs="12" sm="6">
            <p className="cal-total-digits">
              <span>
                <IconDollar width={35} height={35} />
              </span>
              {total}
            </p>
          </Col>
        </Row>
        <Row className="cal-total-row-btn">
          <Col className="mx-auto text-center">
            <button className="cal-reset-btn" onClick={reset} ref={btnRef}>
              RESET
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Calculator;
