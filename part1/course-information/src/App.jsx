const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamental to React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  
  return(
    <div>
      <Header name={course}/>
      <Content data={part1}/>
      <Content data={part2}/>
      <Content data={part3}/>
      <Total totalExercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  );
}

const Header = (props) => {
  console.log(props);
  return(
    <div>
    <h1>{props.name}</h1>
    </div>
  );
}

const Content = (props) => {
  console.log(props);
  return(
    <div>
      <Part name={props.data.name} exercises={props.data.exercises}/>
    </div>
  );
}

const Total = (props) => {
  console.log(props);
  return(
    <div>
    <p>Number of exercises {props.totalExercises}</p>
    </div>
  );
}

const Part = (props) => {
  console.log(props);
  return(
    <div>
    <p>{props.name} {props.exercises}</p>
    </div>
  )
}

export default App