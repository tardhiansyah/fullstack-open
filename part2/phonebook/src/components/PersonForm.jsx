import { useState } from "react";

const PersonForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const isExist = (newPerson) => {
    return props.data.some((person) => person.name === newPerson.name);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      id: props.data.length + 1,
      name: newName,
      number: newNumber,
    };

    if (isExist(newPerson)) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      props.onChange(props.data.concat(newPerson));
    }

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
