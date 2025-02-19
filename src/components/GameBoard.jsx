export default function GameBoard({ handlePlayerMove, gameBoard, setTurns }) {
  return (
    <ol id="game-board">
      {gameBoard.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handlePlayerMove(rowIndex, colIndex, setTurns)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
