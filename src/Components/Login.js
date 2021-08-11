import React from "react";
import { Input, Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();

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
