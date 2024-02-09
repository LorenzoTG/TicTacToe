import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  let playerNameHolder = <span className="player-name">{playerName}</span>;

  const playerEditHandler = () => {
    setIsEditing((prevEditValue) => {
      return !prevEditValue;
    });
  };

  const nameChangeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  if (isEditing) {
    playerNameHolder = (
      <input
        type="text"
        required
        value={playerName}
        onChange={nameChangeHandler}
      />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {playerNameHolder}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={playerEditHandler}>
          {isEditing === false ? "Edit" : "Save"}
        </button>
      </li>
    </>
  );
}
