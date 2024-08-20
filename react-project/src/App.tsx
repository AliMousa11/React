import { useState } from "react";
import "./App.css";
import "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { PiMosqueDuotone } from "react-icons/pi";

function App() {
  const [alertVisibilty, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibilty && (
        <Alert onClose={() => setAlertVisibility(false)}>5ALY BALAK!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Prayer Time
      </Button>
      <PiMosqueDuotone size="50" />
    </div>
  );
}

export default App;
