import { useState } from "react";

const Filter = (props) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);

    const filteredPerson =
      value.length > 0
        ? props.data.filter((person) =>
            person.name.toLowerCase().includes(value.toLowerCase())
          )
        : props.data;

    props.onChange(filteredPerson);
  };

  return (
    <div>
      filter shown with name:
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
