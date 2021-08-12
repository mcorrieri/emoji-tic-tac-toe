import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router";
import db from "./firebase";

function Login() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  //   might have to move this to APP?
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(users);

  const handleSignupClick = () => {
    history.push("/signup");
  };

  const handleLogin = () => {
    history.push("/home");
  };

  return (
    <div>
      <h1>LOGIN </h1>

      <Form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>LOGIN</Button>
        <br></br>
        <Button onClick={handleSignupClick}>OR SIGN UP</Button>
      </Form>
    </div>
  );
}

export default Login;
