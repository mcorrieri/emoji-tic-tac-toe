import { func } from "assert-plus";
import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import Picker from "emoji-picker-react";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);
  const winner = whoWins(squares);
  const nextSymbol = nextTurn ? "X" : "O";
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObj) => {
    setChosenEmoji(emojiObj);
  };

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
      return "Winner" + winner;
    } else if (isBoardFull(squares)) {
      return "DRAW";
    } else {
      return "Next player: " + nextSymbol;
    }
  }

  // const DropdownExampleSelection = () => (
  //   <Dropdown
  //     placeholder="Select Friend"
  //     fluid
  //     selection
  //     options={emojiOptions}
  //   />
  // );

  return (
    <div>
      <div className="player1-dropdown">
        <div>
          {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      </div>
      <div className="player2-dropdown"></div>
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
          <div className="restart-button">{renderRestartButton()}</div>
        </div>
      </div>
    </div>
  );
}
export default Game;
