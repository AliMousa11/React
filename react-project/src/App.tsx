import "./App.css";
import userService, { User } from "./services/userService";
import useUser from "./hooks/useUser";

function App() {
  const { users, error, isloading, setUsers, setError } = useUser();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Ali", username: "Mousa" };
    setUsers([...users, newUser]);
    userService
      .create(newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isloading && <div className="spinner-border"></div>}
      <button onClick={() => addUser()} className="btn btn-outline-primary mb3">
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="mb-2 list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
