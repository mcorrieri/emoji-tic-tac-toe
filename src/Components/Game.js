import { func } from "assert-plus";
import React, { useState } from "react";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);
  const winner = whoWins(squares);

  function Square({ value, onClick }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          nextSquares[i] = nextTurn ? "X" : "O";
          setSquares(nextSquares);
          setNextTurn(!nextTurn);
        }}
      />
    );
  }

  function whoWins(squares) {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
      {
        return null;
      }
    }
  }

  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++)
      if (squares[i] == null) {
        return false;
      } else {
        return true;
      }
  }

  function findWinner() {
    if (winner) {
      return "Winner" + winner;
    } else if (isBoardFull(squares)) {
      return "DRAW";
    } else {
      return "Next player: " + (nextTurn ? "X" : "O");
    }
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{findWinner()}</div>
      </div>
    </div>
  );
}
export default Game;
