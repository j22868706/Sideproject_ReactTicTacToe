import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function editClickHandler (){
        setIsEditing((editing) => !editing);
        if (isEditing){
            onChangeName(symbol, playerName)
        }
    }

    function changeHandler (event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={changeHandler}/>
        // btnCaption = "Save"
    }


    return (
    <li className={isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editClickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>

    )
}