import Course from "./components/Course";
import courses from "./data";

const App = () => {
  return (
    <div>
      {courses.map((c) => (
        <Course key={c.id} course={c} />
      ))}
    </div>
  );
};

export default App;
