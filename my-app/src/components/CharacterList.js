import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div classname="Characters">
      <h1>Breaking Bad</h1>
      {props.char.map(chars => (
        <Character chars={chars} />
      ))}
    </div>
  );
};

export default CharacterList;
