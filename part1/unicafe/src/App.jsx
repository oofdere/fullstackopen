import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const avg = (good + bad * -1) / total;
  const pos = good / total;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <ul>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
        </ul>
        <ul>
          <li>total: {total}</li>
          <li>avg: {avg}</li>
          <li>positive: {pos}%</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
