/* import React, { useState } from 'react'
import Square from './components/Square'
import './App.css' // import css styling

const handleClick = (index) => {
    const squares = [...board];

    // If there is a winner or the square is already filled, return early
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    // Set the value of the clicked square based on the current player (X or O)
    squares[index] = xIsNext ? 'X' : 'O';

    // Update the board and toggle the current player
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  // Function to render a square with its value and click handler
  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => handleClick(index)} />;
  };

  // Determine the winner or the next player's turn
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  // Render the Tic Tac Toe board
  return (
    <div>
      <div className="status">{status}</div>
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
  );

// Functional component for a single square
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacToe */