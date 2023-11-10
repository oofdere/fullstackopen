import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "(555) 555-5555" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const name = newName.trim();
    const phone = newNumber.trim();

    if (persons.some((e) => e.name === name)) {
      alert(`${name} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat({ name, phone }));
    setNewName("");
  };

  return (
    <div>
      <h1>phonebook</h1>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>
            add
          </button>
        </div>
      </form>
      <h2>numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.name}>
            {p.name}: {p.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
