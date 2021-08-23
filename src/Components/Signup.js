import React, { useState } from "react";
import { Input, Form, Button } from "semantic-ui-react";
import firebase from "firebase";
import "firebase/auth";

function Signup() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userName, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h1>SIGN UP</h1>

      <Form>
        <Input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp}>Sign up</Button>
      </Form>
    </div>
  );
}

export default Signup;
