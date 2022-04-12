import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Redux/Actions/UserActions";
import { Form, Button, Alert } from "react-bootstrap";
import { modifyUser } from "./../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({ userName: "", email: "", age: "" });
  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(modifyUser(newUser, user._id, nav));
  };

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.UserReducer);
  const { msg } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("do you want really delete this user")) {
      dispatch(deleteUser(user._id, navigate));
    }
  };
  const userDetails = (
    <div style={{ textAlign: "center" }}>
      <h1>{user.userName}</h1>
      <h4>{user.email}</h4>
      <h4>{user.age}</h4>
    </div>
  );
  const Frorm = (
    <Form style={{ width: "20%", margin: "auto" }} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={newUser.userName}
          type="text"
          placeholder="Enter ename"
          name="userName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={newUser.email}
          type="text"
          placeholder="email"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>age</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={newUser.age}
          type="text"
          placeholder="age"
          name="age"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {msg && (
        <Alert variant="success">
          <p>{msg && msg}</p>
        </Alert>
      )}
    </Form>
  );
  return (
    <div>
      {user ? userDetails : "put here a spinner"}
      <Button
        variant="danger"
        onClick={handleDelete}
        style={{ textAlign: "center" }}
      >
        delete user
      </Button>
      <Button variant="primary" onClick={handleShow}>
        update user
      </Button>
      {show && Frorm}
    </div>
  );
}

export default UserDetails;
