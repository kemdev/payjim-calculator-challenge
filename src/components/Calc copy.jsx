// import React, { useEffect, useState } from "react";

// import "./calc.css";

// import { MDBContainer } from "mdb-react-ui-kit";

// // import the calculator components
// import Display from "./Display";
// import Button from "./Button";

// export default function Calc() {
//   const digit = Array.from({ length: 9 }, (_, i) => i + 1);
//   const buttons = [0, ".", ...digit, "AC", "±", "%", "÷", "×", "-", "+", "="];

//   const [displayValue, setDisplayValue] = useState([]);
//   const [memo, setMemo] = useState([]);
//   const [result, setResult] = useState([]);
//   const [curretnSymb, setCurrentSymb] = useState("");

//   // show the clicked numbers
//   const handleNumbers = (val) => {
//     if (Number(displayValue) === result) return setDisplayValue([]);
//     setDisplayValue([...displayValue, val]);
//   };

//   // First clear the screen from the inputs (not the memory),
//   // is the screen is empty then reset the memory
//   const handleAC = (e) => {
//     if (displayValue?.length === 0) {
//       setResult([]);
//       return setMemo([]);
//     }
//     return setDisplayValue([]);
//   };

//   const handleOperator = (op) => {
//     const toNum =
//       (Array.isArray(displayValue) && Number(displayValue.join(""))) ||
//       Number(displayValue);

//     // if (memo.length > 0 && result > 0) setMemo([result]);
//     if (result === Number(displayValue)) setMemo([result]);
//     else if (memo.length > 0) setMemo([...memo, curretnSymb, toNum]);
//     else setMemo([...memo, toNum]);

//     // set the operators
//     // if (op === "×") setCurrentSymb("*");
//     // if (op === "÷") setCurrentSymb("/");
//     setCurrentSymb(op);

//     // if (!isNaN(op)) {
//     //   console.log('Current op', op)
//     //   switch (curretnSymb) {
//     //     case "+":
//     //       setResult(result + op);
//     //       break;
//     //     case "-":
//     //       setResult(result - op);
//     //       break;
//     //     case "/":
//     //       setResult(result / op);
//     //       break;
//     //     case "*":
//     //       setResult(result * op);
//     //       break;
//     //   }
//     // }

//     //reset the screen
//     setDisplayValue([]);
//   };

//   // // When clicked add the sceen to memo
//   // const handleAdd = (e) => {
//   //   const toNum = Number(displayValue.join(""));

//   //   if (memo.length > 0) setMemo([...memo, curretnSymb, toNum]);
//   //   else setMemo([...memo, toNum]);

//   //   setCurrentSymb(" + ");
//   //   setDisplayValue([]);
//   // };

//   // const handleMinus = (e) => {
//   //   const toNum = Number(displayValue.join(""));
//   //   if (memo.length > 0) setMemo([...memo, curretnSymb, toNum]);
//   //   else setMemo([...memo, toNum]);
//   //   setCurrentSymb("-");
//   //   setDisplayValue([]);
//   // };

//   // when press equal
//   const handleResult = (e) => {
//     let toNum = 0;
//     if (result !== Number(displayValue)) {
//       toNum = Number(displayValue) !== 0 && Number(displayValue.join(""));
//     }

//     if (eval(memo.join("")) /* && memo.length <= 2 */) {
//       let evalResult = eval(memo.join(""));
//       switch (curretnSymb) {
//         case "+":
//           setResult(evalResult + toNum);
//           setMemo([...memo, curretnSymb, toNum]);
//           break;
//         case "-":
//           setResult(evalResult - toNum);
//           setMemo([...memo, curretnSymb, toNum]);
//           break;
//         case "×":
//           setResult(evalResult * toNum);
//           setMemo([...memo, curretnSymb, toNum]);
//           break;
//         case "÷":
//           setResult(evalResult / toNum);
//           setMemo([...memo, curretnSymb, toNum]);
//       }
//     }

//     // else if (eval(memo.join(""))) {
//     //   setResult(eval(memo.join("")));
//     //   setMemo([...memo, curretnSymb, toNum]);
//     // }

//     //
//   };

//   useEffect(() => {
//     setDisplayValue(result.toString());
//     // if(!Number.isInteger(Number(result))) setResult(Math.round(Number(result)).toFixed(2))
//   }, [result]);

//   console.log("Rounded =", Math.ceil((result * 100).toFixed(2))/100)
//   console.log('Result =', result)

//   return (
//     <MDBContainer className="calc">
//       <Display value={displayValue} memo={memo} curretnSymb={curretnSymb} />

//       <div className="parent ">
//         {buttons.map((button, index) => (
//           <Button
//             clickFunc={
//               (button === "AC" && handleAC) ||
//               (index <= 10 && handleNumbers) ||
//               (button === "=" && handleResult) ||
//               (button && handleOperator)
//               // (button === "-" && handleMinus) ||
//             }
//             // onKeyDown={
//             //   (button === "AC" && handleAC) ||
//             //   (index <= 10 && handleNumbers) ||
//             //   (button === "=" && handleResult) ||
//             //   (button && handleOperator)
//             //   // (button === "-" && handleMinus) ||
//             // }
//             button={button}
//             key={index}
//             className={`div${index + 1} `}
//             align={(index <= 10 && "sub") || "middle"}
//             style={{
//               height: (index > 10 && 82) || (index < 2 && 82),
//               lineHeight: index > 10 && "82px",
//             }}
//             bgColor={index > 10 && "#c6488c"}
//             index={index}
//           />
//         ))}
//       </div>
//     </MDBContainer>
//   );
// }
