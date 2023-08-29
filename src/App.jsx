import { useState } from "react";
import "./App.scss";
import Keys from "./coponents/keys/Keys";
import { buttons } from "./assets/data";
import { BsSun } from "react-icons/bs";
import { LuDelete } from "react-icons/lu";
import { evaluate, sqrt } from "mathjs";

function App() {
  const [mode, setMode] = useState(true);
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    // if (value === "C") {
    //   setInput(0);
    // }
    if (value === "=") {
      if (input === "") {
        setInput("");
      } else {
        try {
          const result = evaluate(input);
          setInput(result.toString());
        } catch (error) {
          setInput("Error");
        }
      }
    } else {
      if (value === "C") {
        setInput("");
      } else if (value === "sqrt") {
        if (input === "") {
          setInput("");
        } else {
          const result = sqrt(input);
          setInput(result);
        }
      } else if (value === "%") {
        if (input === "") {
          setInput("");
        } else {
          const result = input / 100;
          setInput(result);
        }
      } else {
        setInput(input + value);
      }
    }
  };
  const deleteNum = (input) => {
    const updatedNum = input.slice(0, input.length - 1);
    setInput(updatedNum);
  };
  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: mode ? "black" : "white" }}
      >
        <div
          className="Calculator shadow rounded-3 p-3"
          style={{
            border: `1px solid ${!mode ? "white" : "black"}`,
            backgroundColor: mode ? "white" : "black",
          }}
        >
          <div
            className="Calculator__mode"
            style={{ color: mode ? "black" : "white" }}
          >
            <span className=" fw-bold fs-4">Calculator</span>
            <BsSun className="icon fs-4 p-1" onClick={() => setMode(!mode)} />
          </div>
          <div
            className="Calculator__result p-3 "
            style={{
              border: `1px solid ${!mode ? "white" : "black"}`,
              color: mode ? "black" : "white",
            }}
          >
            <div className=" d-flex">
              {input}
              <span className=" ">|</span>
            </div>
            {input && (
              <LuDelete className="icon" onClick={() => deleteNum(input)} />
            )}
          </div>
          <div className="Calculator__keys py-3 mt-5">
            {buttons.map((button, index) => (
              <button
                key={index}
                className='Keys d-flex align-items-center justify-content-center  rounded'
                onClick={() => handleButtonClick(button.value)}
                style={{ backgroundColor: button.bg }}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
