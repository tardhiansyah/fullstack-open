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
  const [filteredPersons, setFilteredPersons] = useState([]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter data={persons} onChange={setFilteredPersons} />

      <h3>Add a new</h3>

      <PersonForm data={persons} onChange={setPersons} />

      <h3>Numbers</h3>

      <Persons data={filteredPersons.length > 0 ? filteredPersons : persons} />
    </div>
  );
};

export default App;
