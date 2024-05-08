import { useState, useEffect } from "react";
import personService from "./services/persons";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Get all person registered
  useEffect(() => {
    personService
      .getAll()
      .then((initialResponse) => {
        console.log(initialResponse);
        setPersons(initialResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter person
  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChangeFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  // Check duplicate person
  const isExist = (newPerson) => {
    return persons.some((person) => person.name === newPerson.name);
  };

  // Add new person
  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (isExist(personObject)) {
      const update = confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`);
      if (update) {
        updatePerson(personObject);
      }
    } else {
      personService.create(personObject).then(createdPerson => {
        setPersons(persons.concat(createdPerson));
      }).catch(error => {
        console.log(error);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const updatePerson = (personObject) => {
    const person = persons.find((person) => person.name === personObject.name);
    const updatedPerson = { ...person, number: personObject.number };

    personService
      .update(person.id, updatedPerson)
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
      }).catch(error => {
        console.log(error);
        alert(`the person '${person.name} was already deleted from server'`);
        setPersons(persons.filter(person => person.id !== updatedPerson.id));
      });
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  // Delete person
  const deletePerson = (id) => {
    const personName = persons.find((person) => person.id === id).name;

    const deletePerson = window.confirm(`Delete ${personName} ?`);
    if (!deletePerson) return;

    personService
      .remove(id)
      .then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
      }).catch((error) => {
        console.log(error);
      });
  }
  

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

      <Persons data={filteredPerson} toggleDelete={deletePerson}/>
    </div>
  );
};

export default App;
