import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    if (proceed) {
      console.log("user id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}== {user.email}
            <button onClick={() => handleUserDelete(user._id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
