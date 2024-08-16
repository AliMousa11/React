import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import "./Message";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["Giza", "Cairo", "Assiut", "Fayoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        الهم صلي سيدنا محمد
      </Button>
    </div>
  );
}

export default App;
