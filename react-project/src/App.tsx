import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import "./Message";
import Message from "./Message";

function App() {
  let items = ["Giza", "Cairo", "Assiut", "Fayoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup
      items={items}
      heading="Egyptian Cities"
      onSelectItem={handleSelectItem}
    />
  );
}

export default App;
