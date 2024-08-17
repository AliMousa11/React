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
  const [alertVisibilty, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibilty && (
        <Alert onClose={() => setAlertVisibility(false)}>5ALY BALAK!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Dooos
      </Button>
    </div>
  );
}

export default App;
