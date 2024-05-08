/* eslint-disable react/prop-types */
import Person from "./Person";

const Persons = (props) => {
  return (
    <div>
      {props.data.map((person) => (
        <div key={person.id}>
          <Person name={person.name} number={person.number} />
          <button onClick={() => {props.toggleDelete(person.id)}}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
