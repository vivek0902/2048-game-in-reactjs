import { useState, useEffect } from "react";
import "./App.css";

const SIZE = 4;

const genetateEmptyBoard = () => {
  return [
    [2, 2, 0, 0],
    [2, 2, 4, 4],
    [8, 8, 16, 16],
    [8, 8, 16, 16],
  ];
};

const mergeRow = (row) => {
  let newRow = row.filter((cell) => cell !== 0);

  for (let i = 0; i < newRow.length; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] = newRow[i] * 2;
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

const leftMove = (board) => board.map((row) => mergeRow(row));

const rightMove = (board) =>
  board.map((row) => mergeRow(row.reverse()).reverse());

const upMove = (board) => transpose(leftMove(transpose(board)));

const downMove = (board) => transpose(rightMove(transpose(board)));

function App() {
  const [board, setBoard] = useState(() => {
    return genetateEmptyBoard();
  });

  useEffect(() => {
    const handleGameControlKey = (e) => {
      let newBoard;
      switch (e.key) {
        case "ArrowLeft":
          newBoard = leftMove(board);
          break;
        case "ArrowRight":
          newBoard = rightMove(board);
          break;
        case "ArrowUp":
          newBoard = upMove(board);
          break;
        case "ArrowDown":
          newBoard = downMove(board);
          break;
        default:
          return;
      }
      setBoard(newBoard);
    };

    window.addEventListener("keyup", handleGameControlKey);
    return () => window.removeEventListener("keyup", handleGameControlKey);
  }, [board]);

  return (
    <div className="container">
      <h1>Game 2048</h1>
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
