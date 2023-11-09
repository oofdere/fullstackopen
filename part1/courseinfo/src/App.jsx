const Header = (props) => <h1>{props.course}</h1>;
const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);
const Content = (props) => {
  return props.parts.map((e, i) => <Part part={e} key={i} />);
};
const Total = (props) => {
  const sum = props.parts.reduce((n, { exercises }) => n + exercises, 0);

  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = {
    name: "Half-stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
