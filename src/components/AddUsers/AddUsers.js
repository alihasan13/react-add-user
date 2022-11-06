import React from "react";

const AddUsers = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">User Name</label>
      <input id="userName" type="text" />
      <label htmlFor="age">User Age</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUsers;
