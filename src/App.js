import React, { useState } from 'react'
import Square from './components/Square'
import './App.css' // import css styling

// tic-tac-toe component
const App = () => {
  // useState for gameboard and current player
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [whoNext, setWhoNext] = useState(true)
// winner calculation
const calcWinner = (squares) => {
  const combo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for (let i = 0; i < combo.length; i++) {
    const [a,b,c] = combo[i]
    // if winning path that begins with a number from combo[a] is in line of winning path, with another number from the combo[b] AND in line of winning path from combo[c]. i.e. If square[a] is 0, and when its 0, square[b] is 1, and when square[a] is 0 and square[c] is 2, you win.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
}
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square />
    </>
  )
}

export default App


/*    return null;
  };

  // Function to handle square click and update the game state
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
};

// Functional component for a single square
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacToe */