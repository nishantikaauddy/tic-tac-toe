export function handlePlayerNameSave(setPlayerData, symbol, name) {
    setPlayerData(prevData => {
        return {
            ...prevData,
            [symbol]: name,
        }
    });
}

export function deriveActivePlayer(turns) {
    return (turns.length>0 && turns[0].player === 'X') ? 'O' : 'X';
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

export function restartMatch(setGameTurns) {
    setGameTurns([]);
}