import Part from "./Part";
import Total from "./Total";

const Content = ({ content }) => {
  return (
    <>
      <div>
        {content.map((part) => (
          <Part key={part.id} content={part} />
        ))}
      </div>
      <div>
        <Total content={content} />
      </div>
    </>
  );
};

export default Content;
