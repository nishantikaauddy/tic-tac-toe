export default function GameOver({ winner, handleGameReset }) {
  return (
    <div id="game-over">
      <h1>GAME OVER</h1>
      {winner ? <p>{winner} Won!</p> : <p>The game is a draw!</p>}
      <p>
        <button onClick={handleGameReset}>Restart</button>
      </p>
    </div>
  );
}
