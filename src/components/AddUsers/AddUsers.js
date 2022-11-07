import React from "react";
import Card from "../UI/Card";

const AddUsers = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
    <form onSubmit={submitHandler}>
      <label htmlFor="username">User Name</label>
      <input id="userName" type="text" />
      <label htmlFor="age">User Age</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
    </Card>
  );
};
export default AddUsers;
