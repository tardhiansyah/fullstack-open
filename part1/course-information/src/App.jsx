const App = () => {
  const course = "Half Stack application development";
  const content = [
    {name: "Fundamentals of React", numberOfExercises: 10},
    {name: "Using props to pass data", numberOfExercises: 7},
    {name: "State of a component", numberOfExercises: 14}
  ];
  
  return(
    <div>
      <Header name={course}/>
      <Content data={content}/>
      <Total totalExercises={content[0].numberOfExercises + content[1].numberOfExercises + content[2].numberOfExercises}/>
    </div>
  );
}

const Header = (props) => {
  return(
    <div>
    <h1>{props.name}</h1>
    </div>
  );
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.data[0].name} numberOfExercises={props.data[0].numberOfExercises}/>
      <Part name={props.data[1].name} numberOfExercises={props.data[1].numberOfExercises}/>
      <Part name={props.data[2].name} numberOfExercises={props.data[2].numberOfExercises}/>
    </div>
  );
}

const Total = (props) => {
  return(
    <div>
    <p>Number of exercises {props.totalExercises}</p>
    </div>
  );
}

const Part = (props) => {
  return(
    <div>
    <p>{props.name} {props.numberOfExercises}</p>
    </div>
  )
}

export default App