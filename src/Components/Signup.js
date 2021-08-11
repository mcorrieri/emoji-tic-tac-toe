import React from "react";
import { Input, Form, Button } from "semantic-ui-react";

function Signup() {
  return (
    <div>
      <h1>SIGN UP</h1>

      <Form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign up</Button>
      </Form>
    </div>
  );
}

export default Signup;
