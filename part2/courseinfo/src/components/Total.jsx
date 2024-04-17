const Total = ({ content }) => {
  const totalExercise = content.reduce(
    (total, part) => total + part.exercise,
    0
  );
  return (
    <>
      <p>
        <strong>Total of {totalExercise} exercises</strong>
      </p>
    </>
  );
};

export default Total;
