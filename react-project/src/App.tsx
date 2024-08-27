import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  });
  return (
    <div>
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
