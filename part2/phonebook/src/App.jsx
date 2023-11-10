import { useState } from "react";
import Input from "./components/Input";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const filteredPersons = persons.filter(({ name }) => {
    return name.toLowerCase().includes(search.trim().toLowerCase());
  });

  const handleAdd = (e) => {
    e.preventDefault();
    const name = newName.trim();
    const number = newNumber.trim();

    if (persons.some((e) => e.name === name)) {
      alert(`${name} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat({ name, number, id: persons.length + 1 }));
    setNewName("");
  };

  return (
    <div>
      <h1>phonebook</h1>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        onSubmit={handleAdd}
      />
      <h2>numbers</h2>
      <Input label="search" value={search} setfn={setSearch} />
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
