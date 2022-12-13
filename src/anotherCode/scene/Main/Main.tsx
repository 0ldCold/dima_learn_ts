import React from "react";
import { onButtonClick } from "src/main";

const Main: React.FC = () => {
  return (
    <div className={"screen"}>
      <button className={"button"} onClick={onButtonClick}>
        Click me!
      </button>
    </div>
  );
};

export default Main;
