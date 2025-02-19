export function handlePlayerNameSave(setPlayerData, symbol, name) {
  setPlayerData((prevData) => {
    return {
      ...prevData,
      [symbol]: name,
    };
  });
}

export function deriveActivePlayer(turns) {
  return turns.length > 0 && turns[0].player === "X" ? "O" : "X";
}

export function toggleActivePlayer(rowIndex, colIndex, setGameTurns) {
  setGameTurns((prevGameTurns) => {
    let currentPlayer = deriveActivePlayer(prevGameTurns);
    let updatedGameTurns = [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevGameTurns,
    ];
    return updatedGameTurns;
  });
}

export function initializeGameBoard(GAME_ARRAY, gameTurns) {
  let board = [...GAME_ARRAY.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const { row, col } = { ...turn.square };
    board[row][col] = turn.player;
  }
  return board;
}

export function checkWinner(WINNING_COMBINATIONS, board, playerData) {
  for (const combination of WINNING_COMBINATIONS) {
    let firstSymbol = board[combination[0].row][combination[0].col];
    let secondSymbol = board[combination[1].row][combination[1].col];
    let thirdSymbol = board[combination[2].row][combination[2].col];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      return playerData[firstSymbol];
    }
  }
}

export function restartMatch(setGameTurns) {
  setGameTurns([]);
}
