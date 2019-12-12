import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import CharacterList from "./components/CharacterList";

function App() {
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then(res => {
        console.log(res);
        setChar(res.data);
      })
      .catch(err => {
        console.log("this is an error", err.message);
      });
  }, []);

  return (
    <div className="App">
      <CharacterList char={char} />
    </div>
  );
}

export default App;
