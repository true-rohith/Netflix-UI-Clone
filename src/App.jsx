import { useState } from "react";
import "./App.css";
import Homescreen from "./Homescreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Homescreen />
      </div>
    </>
  );
}

export default App;
