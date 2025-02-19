export const DEFAULT_PLAYER_NAMES = {
    X: "Player1",
    O: "Player2",
}
  
export const GAME_ARRAY = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export const WINNING_COMBINATIONS = [
    [{row:0, col:0}, {row:0, col:1}, {row:0, col:2}],
    [{row:1, col:0}, {row:1, col:1}, {row:1, col:2}],
    [{row:2, col:0}, {row:2, col:1}, {row:2, col:2}],

    [{row:0, col:0}, {row:1, col:0}, {row:2, col:0}],
    [{row:0, col:1}, {row:1, col:1}, {row:2, col:1}],
    [{row:0, col:2}, {row:1, col:2}, {row:2, col:2}],

    [{row:0, col:0}, {row:1, col:1}, {row:2, col:2}],
    [{row:0, col:2}, {row:1, col:1}, {row:2, col:0}],
]
