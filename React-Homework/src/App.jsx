import { useState } from "react";
import "./App.css";
import names from "./static/names";
import Button from "react-bootstrap/Button";

function App() {
  const [index, setIndex] = useState(0);
  const [namepool, setNamePool] = useState(names);
  const [newName, setNewName] = useState("");

  const randomNumberHandler = () => {
    const rangeLimit = Math.floor(Math.random() * namepool.length);
    setIndex(rangeLimit);
  };

  const addName = () => {
    if (newName !== "") {
      setNamePool([...namepool, newName]);
    }
  };

  return (
    <>
      <div className="name-container">
        <h1>{namepool[index]}</h1>
      </div>

      <div className="randomize-button">
        <Button className="btn btn-primary" onClick={randomNumberHandler}>
          {"Randomize"}
        </Button>
      </div>

      <div className="text-input">
        <p>type new name</p>
        <input type="text" onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        <button className="btn btn-primary" onClick={addName}>
          add name
        </button>
      </div>

      <div>
        <p>Name list : {namepool.join(", ")}</p>
      </div>
    </>
  );
}

export default App;
