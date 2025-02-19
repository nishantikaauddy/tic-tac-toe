import { useState } from "react";

export default function Player(props) {
  let { playerSymbol } = { ...props };
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.initialName);

  function toggleEdit() {
    setEditing((editMode) => !editMode);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {editing ? (
          <input
            required
            placeholder="Enter Name"
            type="text"
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={() => toggleEdit()}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
