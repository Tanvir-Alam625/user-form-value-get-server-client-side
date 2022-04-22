import React from "react";
const handleFormSubmit = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  //   console.log(name, email);
  const user = { name, email };
  // get data to the sever
  fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
const User = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <h2>Add A New User</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default User;
