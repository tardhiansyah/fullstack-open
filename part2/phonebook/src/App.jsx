import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // #region Effect Hooks
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  // #endregion

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
