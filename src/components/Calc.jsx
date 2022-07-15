import React, { useEffect, useState } from "react";
import "./calc.css";

// import the calculator components
import Display from "./Display";
import Button from "./Button";

// import Calculator Decor
import Solar from "./decoration/Solar";
import Divider from "./decoration/Divider";

// import Tilt
import Tilt from "react-parallax-tilt";

export default function Calc() {
  const digit = Array.from({ length: 9 }, (_, i) => i + 1);
  const buttons = [0, ".", ...digit, "AC", "±", "%", "÷", "×", "-", "+", "="];

  const [displayValue, setDisplayValue] = useState("");
  const [memo, setMemo] = useState("");
  const [result, setResult] = useState("");
  const [curretnSymb, setCurrentSymb] = useState("");

  function round(num, precision) {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
  }

  // show the clicked numbers
  const handleNumbers = (val) => {
    // stop add '.' when there is a dot exit
    if (val === "." && displayValue.indexOf(val) !== -1) return;
    if (displayValue.length >= 20) return alert("too much input");
    if (curretnSymb === "=") return alert("please select an operator");
    if (Number(displayValue) === result /*  && result !== 0 */)
      return setDisplayValue("");

    setDisplayValue(displayValue + val);
  };

  // First clear the screen from the inputs (not the memory),
  // is the screen is empty then reset the memory
  const handleAC = (e) => {
    if (displayValue?.length === 0) {
      setResult("");
      setCurrentSymb("");
      return setMemo("");
    }
    setCurrentSymb("");
    return setDisplayValue("");
  };

  const handleOperator = (op) => {
    let toNum = Number(displayValue);
    // console.log("The toNUm", toNum);
    if (!Number.isInteger(toNum) && toNum)
      toNum = round(Number(displayValue), 2);

    if (result === Number(displayValue)) setMemo(result.toString());
    else if (memo.length > 0) setMemo(memo + curretnSymb + toNum);
    else setMemo(memo + toNum);

    // set the operators

    setCurrentSymb(op);

    // reset the screen
    setDisplayValue("");
  };

  // when press equal
  const handleResult = (e) => {
    let toNum = Number(displayValue) || 0;
    if (result !== toNum) {
      toNum = (toNum !== 0 && toNum) || 0;
    }

    // if (eval(memo)) {
    let evalResult = eval(memo.replace(/[÷]/g, "/").replace(/[×]/g, "*"));
    switch (curretnSymb) {
      case "+":
        setResult(evalResult + toNum);
        setMemo(memo + curretnSymb + toNum);
        break;
      case "-":
        setResult(evalResult - toNum);
        setMemo(memo + curretnSymb + toNum);
        break;
      case "×":
        setResult(evalResult * toNum);
        setMemo(memo + curretnSymb + toNum);
        break;
      case "÷":
        setResult(evalResult / toNum);
        setMemo(memo + curretnSymb + toNum);
    }
    // }
    setCurrentSymb("=");
  };

  useEffect(() => {
    setDisplayValue(result?.toString());
    // if(!Number.isInteger(Number(result))) setResult(Math.round(Number(result)).toFixed(2))
    if (!Number.isInteger(Number(result)) && Number(result) > 0)
      setDisplayValue(round(Number(result), 2).toString());
  }, [result]);

  console.log("Display", displayValue.length);

  return (
    // <Tilt
    //   // tiltEnable={false}

    //   // Tilt Property
    //   tiltMaxAngleX={2}
    //   tiltMaxAngleY={2}

    //   // Glare effect
    //   glareEnable={true}
    //   glareBorderRadius="36px"
    //   glareMaxOpacity={0.3}
    //   glareColor="#fff"
    //   glarePosition="all"
    // >
    <div
      className="calc container"
      tabIndex="0"
      onKeyDown={(e) => console.log("A key has been pressed", e.key)}
    >
      <Solar />
      <Display
        value={displayValue}
        memo={memo}
        curretnSymb={curretnSymb}
        round={round}
      />

      <Divider />

      <div className="parent col-xs-4 p-3">
        {buttons.map((button, index) => (
          <Button
            clickFunc={
              (button === "AC" && handleAC) ||
              (index <= 10 && handleNumbers) ||
              (button === "=" && handleResult) ||
              (button && handleOperator)
            }
            button={button}
            key={index}
            className={`div${index + 1} `}
            align={(index <= 10 && "sub") || "middle"}
            style={{
              height: (index > 10 && 82) || (index < 2 && 82),
              lineHeight: index > 10 && "82px",
            }}
            bgColor={index > 10 && "#c6488c"}
            index={index}
          />
        ))}
      </div>
    </div>
    //</Tilt>
  );
}
