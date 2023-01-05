import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dicta quod nihil qui illo ex quisquam explicabo, minus ullam rerum
        necessitatibus, commodi accusantium quae repellendus sed. Molestiae
        earum, similique quidem nemo reiciendis quasi eveniet sunt, architecto
        amet consequuntur deserunt dolorum possimus a officia tenetur nulla
        dolorem! Minima dolorem nesciunt quisquam?
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>Component Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dicta quod nihil qui illo ex quisquam explicabo, minus ullam rerum
        necessitatibus, commodi accusantium quae repellendus sed. Molestiae
        earum, similique quidem nemo reiciendis quasi eveniet sunt, architecto
        amet consequuntur deserunt dolorum possimus a officia tenetur nulla
        dolorem! Minima dolorem nesciunt quisquam?
      </p>
    </div>
  );
};

export default Style2;
