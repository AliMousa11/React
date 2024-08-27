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
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isloading && <div className="spinner-border"></div>}
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
