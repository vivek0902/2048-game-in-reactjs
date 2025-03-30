import { useState, useEffect, useRef } from "react";
import "./App.css";

const SIZE = 4;

const generateEmptyBoard = () => {
  return Array(SIZE)
    .fill()
    .map(() => Array(SIZE).fill(0));
};

const getRandomEmptyCell = (newBoard) => {
  let emptyCells = [];
  newBoard.map((row, r) =>
    row.map((cell, c) => {
      if (cell === 0) {
        emptyCells.push([r, c]);
      }
    })
  );

  return emptyCells.length
    ? emptyCells[Math.floor(Math.random() * emptyCells.length)]
    : null;
};

const addNewTile = (board) => {
  let newBoard = board.map((row) => [...row]);
  let cell = getRandomEmptyCell(newBoard); // cell value like [1,2] like this so cell[0]=1 and cell[1]=2
  if (cell) {
    newBoard[cell[0]][cell[1]] = Math.random() < 0.8 ? 2 : 4;
  }
  return newBoard;
};

const mergeRow = (row, scoreRef) => {
  let newRow = row.filter((cell) => cell !== 0);

  for (let i = 0; i < newRow.length; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] = newRow[i] * 2;
      scoreRef.current += newRow[i];
      newRow[i + 1] = 0;
    }
  }
  newRow = newRow.filter((cell) => cell !== 0);

  while (newRow.length < SIZE) {
    newRow.push(0);
  }

  return newRow;
};

const transpose = (board) => {
  let newBoard = [];
  for (let c = 0; c < board[0].length; c++) {
    let newRow = [];
    for (let r = 0; r < board.length; r++) {
      newRow.push(board[r][c]);
    }
    newBoard.push(newRow);
  }
  return newBoard;
};

const leftMove = (board, scoreRef) =>
  board.map((row) => mergeRow(row, scoreRef));

const rightMove = (board, scoreRef) =>
  board.map((row) => mergeRow(row.reverse(), scoreRef).reverse());

const upMove = (board, scoreRef) =>
  transpose(leftMove(transpose(board), scoreRef));

const downMove = (board, scoreRef) =>
  transpose(rightMove(transpose(board), scoreRef));

const isGameOver = (board) => {
  return getRandomEmptyCell(board) ? false : true;
};

function App() {
  const [board, setBoard] = useState(() => {
    return addNewTile(addNewTile(generateEmptyBoard()));
  });

  const scoreRef = useRef(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleGameControlKey = (e) => {
      let newBoard;
      switch (e.key) {
        case "ArrowLeft":
          newBoard = leftMove(board, scoreRef);
          break;
        case "ArrowRight":
          newBoard = rightMove(board, scoreRef);
          break;
        case "ArrowUp":
          newBoard = upMove(board, scoreRef);
          break;
        case "ArrowDown":
          newBoard = downMove(board, scoreRef);
          break;
        default:
          return;
      }
      if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
        newBoard = addNewTile(newBoard);
        setBoard(newBoard);
        if (isGameOver(newBoard)) {
          setGameOver(true);
        }
      }
    };

    window.addEventListener("keyup", handleGameControlKey);
    return () => window.removeEventListener("keyup", handleGameControlKey);
  }, [board, scoreRef]);
  const restartGame = () => {
    setBoard(addNewTile(addNewTile(generateEmptyBoard())));
    setGameOver(false);
    scoreRef.current = 0;
  };
  return (
    <div className="container">
      <h1>Game 2048</h1>
      <h2>Score: {scoreRef.current}</h2>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      <div className="board">
        {board.map((row, r) =>
          row.map((cell, c) => (
            <div key={`${r}-${c}`} className={`tile x${cell}`}>
              {cell !== 0 ? cell : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
