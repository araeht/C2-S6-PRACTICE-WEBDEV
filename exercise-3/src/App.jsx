import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  const onA = (event) => {
    setA(event.target.value);
    setError(false);
  }
  const onB = (event) => {
    setB(event.target.value);
    setError(false);
  }
  const computeSum = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setError(true);
      setResult("Error: A and B must be numbers");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} style={{ color: error ? "red" : "black" }} />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
