import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const dummyData = [
  { name: "Arto Hellas", number: "040-1234567", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = useState(dummyData);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // #region Filter
  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChangeFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };
  // #endregion

  // #region PersonForm
  const isExist = (newPerson) => {
    return persons.some((person) => person.name === newPerson.name);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (isExist(newPerson)) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }

    setNewName("");
    setNewNumber("");
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  // #endregion

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleChangeFilter} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
      />

      <h3>Numbers</h3>

      <Persons data={filteredPerson} />
    </div>
  );
};

export default App;
