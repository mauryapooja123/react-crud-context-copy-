import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [allData, setAllData] = useState({});
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e, id, name, email) => {
    e.preventDefault();
    const newUser = {
      id,
      name,
      email,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          onChange={onChange}
          name="name"
          placeholder="Enter name"
          required
        ></Input>
        <Label>email</Label>
        <Input
          type="text"
          onChange={onChange}
          name="email"
          placeholder="Enter email"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
