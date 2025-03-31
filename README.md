# 2048 Game in React

**Live Demo:** [Play 2048](https://vivek0902.github.io/2048-game-in-reactjs/)

This is a simple implementation of the **2048** game built using React. The game allows players to slide numbered tiles on a **4×4 grid** to combine them into higher numbers, aiming to reach **2048**.

![2048 Game Screenshot](https://github.com/user-attachments/assets/ddeab2bd-088c-4f6b-8379-033602d8fb65)

---

## Features

- **Keyboard Controls:** Use arrow keys (`← ↑ → ↓`) to move tiles.
- **Mobile Touch Support:** Swipe in any direction (`← ↑ → ↓`) to move tiles on touch screens.
- **Auto Tile Addition:** A new tile (`2` or `4`) appears after every move.
- **Tile Merging:** Tiles with the same value merge when moved in the same direction.
- **Game Over Detection:** The game ends when no more moves are possible.
- **Score Tracking:** Keeps track of the current and highest score.
- **Game Restart:** Restart the game at any point.
- **Styled UI:** A visually appealing board with smooth animations.

---

## Installation & Running Locally

1. **Clone the repository:**

   ```sh
   git clone https://github.com/vivek0902/2048-game-in-reactjs.git
   cd 2048-game-in-reactjs
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The game will run on `http://localhost:3000`.

---

## How to Play

- **Use Arrow Keys** (`← ↑ → ↓`) to move tiles in the desired direction.
- **Swipe on Mobile:** Swipe left, right, up, or down to move tiles.
- **Merging:** Tiles with the same number merge when they collide.
- **Winning:** The goal is to **reach 2048**!
- **Game Over:** The game ends when there are no valid moves left.

---

## Project Structure

```
2048-game-in-reactjs/
│── src/
│   ├── components/       # Reusable components
│   ├── App.js           # Main game logic
│   ├── style.css        # Styling for the board and tiles
│── public/
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```

---

## Technologies Used

- **React** (useState, useEffect, useRef)
- **CSS** for styling and animations
- **JavaScript** for game logic
- **Local Storage** for high score tracking

---

## Future Enhancements

- **Undo Feature** to revert the last move.
- **Game Over Modal** with better UI feedback.
- **Dark Mode Support** for better UI experience.
- **AI Bot Mode** to play automatically.

---

Feel free to modify and improve!

🚀 Happy Coding!
