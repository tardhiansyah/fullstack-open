/* eslint-disable react/prop-types */
import Person from "./Person";

const Persons = ( props ) => {
    return (
        <div>
            {props.data.map((person) => (
                <Person key={person.id} name={person.name} number={person.number} />
            ))}
        </div>
    );
}

export default Persons