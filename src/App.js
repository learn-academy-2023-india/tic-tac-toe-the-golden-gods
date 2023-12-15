import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [whoNext, setWhoNext] = useState(true)

  const calcWinner = (squares) => {
    const combo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < combo.length; i++) {
      const [a, b, c] = combo[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index) => {
    const squares = [...board]

    if (calcWinner(squares) || squares[index]) {
      return
    }

    squares[index] = whoNext ? '❎' : '🅾️'
    setBoard(squares)
    setWhoNext(!whoNext)
  }

  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => handleClick(index)} />
  }

  const winner = calcWinner(board)
  const status = winner ? `Winner is ${winner}` : `${whoNext ? '❎' : '🅾️'} is next`

  //Handle click event for the restart button
const handleRestart = () => {
  // reset the squares array and player turn
  setBoard(Array(9).fill(null))
  setWhoNext(true)
}
  return (
    <div className="background">
      <h1 className="title">Tic Tac Toe</h1>
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
      <button className='restart' onClick={handleRestart}>
    Restart
    </button>
    </div>
  )

}

export default App
