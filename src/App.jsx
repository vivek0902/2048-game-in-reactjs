import { useState } from "react";
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
function App() {
  const [board, setBoard] = useState(() => {
    return genetateEmptyBoard();
  });

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
