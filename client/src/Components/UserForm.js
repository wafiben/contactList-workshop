import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./../Redux/Actions/UserActions";


function UserForm() {
  const { msg } = useSelector((state) => state.UserReducer);
  if (msg) {
  }
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", userName: "", age: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({ email: "", userName: "", age: "" })
  };
  return (
    <Form style={{ width: "20%", margin: "auto" }} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={user.userName}
          type="text"
          placeholder="Enter ename"
          name="userName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={user.email}
          type="text"
          placeholder="email"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>age</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={user.age}
          type="text"
          placeholder="age"
          name="age"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

   
    </Form>
  );
}

export default UserForm;
