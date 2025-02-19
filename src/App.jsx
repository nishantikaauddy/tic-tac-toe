import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";

import {
  deriveActivePlayer,
  toggleActivePlayer,
  restartMatch,
} from "./helper/GameHelper";

import { GAME_ARRAY, WINNING_COMBINATIONS } from "./utils/GameArray";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let board = [...GAME_ARRAY.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const { row, col } = { ...turn.square };
    board[row][col] = turn.player;
  }

  let winner = null;
  let isDraw = gameTurns.length === 9 && !winner;

  for (const combination of WINNING_COMBINATIONS) {
    let firstSymbol = board[combination[0].row][combination[0].col];
    let secondSymbol = board[combination[1].row][combination[1].col];
    let thirdSymbol = board[combination[2].row][combination[2].col];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
    }
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerSymbol="X"
            initialName="Player1"
            isActive={activePlayer === "X"}
          />
          <Player
            playerSymbol="O"
            initialName="Player2"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            winner={winner}
            handleGameReset={() => restartMatch(setGameTurns)}
          />
        )}
        <GameBoard
          handlePlayerMove={toggleActivePlayer}
          gameBoard={board}
          setTurns={setGameTurns}
        />
      </div>
      <Logs turns={gameTurns} />
    </>
  );
}

export default App;
