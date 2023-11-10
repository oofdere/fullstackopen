const Person = ({ person }) => (
  <li>
    {person.name}: {person.number}
  </li>
);

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((p) => (
        <Person person={p} key={p.id} />
      ))}
    </ul>
  );
};

export default Persons;
