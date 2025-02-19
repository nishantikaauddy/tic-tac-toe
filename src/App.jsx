import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";

import {
  handlePlayerNameSave,
  deriveActivePlayer,
  toggleActivePlayer,
  initializeGameBoard,
  checkWinner,
  restartMatch,
} from "./helper/GameHelper";

import {
  DEFAULT_PLAYER_NAMES,
  GAME_ARRAY,
  WINNING_COMBINATIONS,
} from "./utils/GameConstants";
import GameOver from "./components/GameOver";

function App() {
  const [playerData, setPlayerData] = useState(DEFAULT_PLAYER_NAMES);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const board = initializeGameBoard(GAME_ARRAY, gameTurns);
  const winner = checkWinner(WINNING_COMBINATIONS, board, playerData);
  const isDraw = gameTurns.length === 9 && !winner;

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerSymbol="X"
            initialName={DEFAULT_PLAYER_NAMES.X}
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameSave}
            setPlayerData={setPlayerData}
          />
          <Player
            playerSymbol="O"
            initialName={DEFAULT_PLAYER_NAMES.O}
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameSave}
            setPlayerData={setPlayerData}
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
