import { useEffect, useState } from "react";
import "./App.css";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const controller = new AbortController();
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    console.log("Ali");
    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li className="mb-2" key={user.id}>
            id: {user.id} <br />
            name: {user.name} <br />
            username: {user.username} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
