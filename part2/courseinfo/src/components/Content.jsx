const Part = ({ part }) => {
  return (
    <>
      <p>
        <b>{part.name}:</b> {part.exercises} exercises
      </p>
    </>
  );
};

const Content = ({ contents }) =>
  contents.map((part) => <Part key={part.id} part={part} />);

export default Content;
