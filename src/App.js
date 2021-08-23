import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./Components/Game";
import Users from "./Users";
import db from "./Components/firebase";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Switch, Route } from "react-router";
import firebaseui from "firebaseui";

function App() {
  const [users, setUsers] = useState([]);
  const firebase = require("firebase");
  // const ui = require("firebaseui");
  const user = true;

  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(data);
      });
  }, []);

  // ui.start("#firebaseui-auth-container", {
  //   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  //   // Other config options...
  // });

  return (
    <div className="App-title">
      <Switch>
        {/* {user ? ( */}
        <Route exact path="/home">
          <h1>Emoji Tic Tac Toe!</h1>
          <Game />
        </Route>
        {/* ) : ( */}
        <Route exact path="/login">
          <Login />
        </Route>
        {/* )} */}
        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* <Users /> */}
      </Switch>
    </div>
  );
}

export default App;
