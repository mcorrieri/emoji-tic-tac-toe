import React, { useState } from "react";

function Game() {
  const emojiList = [
    "💀",
    "🐷",
    "😀",
    "😉",
    "😏",
    "🤮",
    "🤠",
    "💩",
    "👻",
    "👾",
    "🤌",
    "🖕",
    "👶",
    "👨‍🦰",
    "👴",
    "👩‍🍳",
    "🧑‍🚀",
    "🧛",
    "🧑‍🦼",
    "🦧",
    "🦊",
    "🐖",
    "☃️",
  ];
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);
  const winner = whoWins(squares);
  const [emoji1, setEmoji1] = useState("");
  const [emoji2, setEmoji2] = useState("");
  const nextSymbol = nextTurn ? emoji1 : emoji2;

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
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);
          setNextTurn(!nextTurn);
        }}
      />
    );
  }

  function Restart({ onClick }) {
    return (
      <button className="restart" onClick={onClick}>
        Reset Game
      </button>
    );
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setNextTurn(true);
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
    }
  }

  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function findWinner() {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      return "DRAW";
    } else {
      return "Next player: " + nextSymbol;
    }
  }

  return (
    <div>
      <div className="container">
        <div className="player-select">
          <div className="player1-dropdown">
            <h2>Player 1</h2>
            <select onChange={(e) => setEmoji1(e.target.value)}>
              <option>👻</option>
              <option>💀</option>
              <option>🐷</option>
              <option>😀</option>
              <option>😉</option>
              <option>😏</option>
              <option>🤮</option>
              <option>🤠</option>
              <option>💩</option>
              <option>👻</option>
              <option>👾</option>
              <option>🤌</option>
            </select>
          </div>
        </div>
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
          <div className="restart-button">{renderRestartButton()}</div>
        </div>
        <div className="player2-dropdown">
          <h2>Player 2</h2>
          <select onChange={(e) => setEmoji2(e.target.value)}>
            <option value="👨‍🦰">👨‍🦰</option>
            <option value="👴">👴</option>
            <option value="👩‍🍳">👩‍🍳</option>
            <option value="🧑‍🚀">🧑‍🚀</option>
            <option value="🧛">🧛</option>
            <option value="🧑‍🦼">🧑‍🦼</option>
            <option value="🦧">🦧</option>
            <option value="🦊">🦊</option>
            <option value="🐖">🐖</option>
            <option value="☃️">☃️</option>
            <option value="🖕">🖕</option>
            <option value="👶">👶</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Game;
