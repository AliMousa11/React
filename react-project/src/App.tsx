import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import "./Message";
import Message from "./Message";
import Alert from "./components/Alert";

function App() {
  let items = ["Giza", "Cairo", "Assiut", "Fayoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>الهم صلي سيدنا محمد</Alert>
    </div>
  );
}

export default App;
