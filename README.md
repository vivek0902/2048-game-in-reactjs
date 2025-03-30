### README.md

# 2048 Game in React
live demo : https://vivek0902.github.io/2048-game-in-reactjs/

This is a simple implementation of the 2048 game built using React. The game allows players to slide numbered tiles on a 4x4 grid to combine them into higher numbers, aiming to reach 2048.

![image](https://github.com/user-attachments/assets/ddeab2bd-088c-4f6b-8379-033602d8fb65)

## Features

- **Keyboard Controls**: Use arrow keys (`← ↑ → ↓`) to move tiles.
- **Auto Tile Addition**: A new tile (`2` or `4`) appears after every move.
- **Tile Merging**: Tiles with the same value merge when moved in the same direction.
- **Game Board Styling**: A visually appealing 2048 board with different colors for each tile value.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/2048-game.git
   cd 2048-game
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the game:

   ```sh
   npm start
   ```

## How to Play

- Use the **arrow keys** to slide tiles in the desired direction.
- Tiles with the **same number** merge when they collide.
- The game **ends** when no more moves are possible.
- The goal is to **reach 2048**!

## Project Structure

```
2048-game/
│── src/
│   ├── App.jsx       # Main game logic
│   ├── App.css       # Styling for the board and tiles
│── package.json      # Dependencies and scripts
│── README.md         # Project documentation
```


## Technologies Used

- **React** (useState, useEffect)
- **CSS** for styling
- **JavaScript** for game logic

## Future Enhancements

- **Undo Feature**
- **Game Over & Restart Option**
- **Local Storage for High Scores**
- **Mobile Touch Support**

## License

This project is open-source and available.

---

Feel free to modify this README as needed! 🚀
