import Course from "./components/Course";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          id: 1,
          name: "Fundamentals of React",
          exercise: 10,
        },
        {
          id: 2,
          name: "Using props to pass data",
          exercise: 7,
        },
        {
          id: 3,
          name: "State of a component",
          exercise: 14,
        },
        {
          id: 4,
          name: "Redux",
          exercise: 5,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          id: 1,
          name: "Routing",
          exercise: 3,
        },
        {
          id: 2,
          name: "Middleware",
          exercise: 7,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Application Curriculum</h1>
      {course.map((c) => (
        <Course key={c.id} course={c} />
      ))}
    </div>
  );
};

export default App;
