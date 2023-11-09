import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <li>
    {text}: {value}
  </li>
);
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good + bad * -1) / total;
  const pos = good / total;

  if (total < 1) {
    return (
      <div>
        <h2>statistics</h2>
        <p>no feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>statistics</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <ul>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
        </ul>
        <ul>
          <StatisticLine text="total" value={total} />
          <StatisticLine text="avg" value={avg} />
          <StatisticLine text="positive" value={`${pos}%`} />
        </ul>
      </div>
    </div>
  );
};

const Vote = ({ value, setValue, text }) => (
  <button onClick={() => setValue(value + 1)}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Vote value={good} setValue={setGood} text="good" />
      <Vote value={neutral} setValue={setNeutral} text="neutral" />
      <Vote value={bad} setValue={setBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
