import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./Components/Game";
import Users from "./Users";
import db from "./lib/firebase";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Switch, Route } from "react-router";

function App() {
  const [users, setUsers] = useState([]);

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

  return (
    <div className="App-title">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <h1>Emoji Tic Tac Toe!</h1>
          <Game />
        </Route>
        {/* <Users /> */}
      </Switch>
    </div>
  );
}

export default App;
