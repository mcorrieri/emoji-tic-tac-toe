import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./Components/Game";
import Users from "./Users";
import db from "./lib/firebase";

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
      <h1>Emoji Tic Tac Toe!</h1>
      <Game />
      {/* <Users /> */}
    </div>
  );
}

export default App;
