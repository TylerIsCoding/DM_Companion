import { useState } from "react";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerRoll = ({ id, name, color }) => {
    const [roll, setRoll] = useState("");

    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 20 + 1);
        setRoll(diceRoll);
    };

    return (
        <>
            <div
                className="div__init_player"
                style={{ backgroundColor: color }}
            >
                {name.length > 15 ? name.slice(0, 10) + "..." : name}
            </div>
            <section className="section__player_roll">
                <input
                    id={`player_roll_${id}`}
                    type="number"
                    value={roll}
                    min={1}
                    max={20}
                    className="input__text input__roll"
                    placeholder={`Enter roll for ${
                        name.length > 15 ? name.slice(0, 10) + "..." : name
                    }`}
                    onChange={(e) => {
                        setRoll(e.target.value);
                    }}
                />
                <button
                    className="button__roll_init"
                    onClick={() => rollDice()}
                >
                    <FontAwesomeIcon icon={faDiceThree} />
                </button>
            </section>
        </>
    );
};

export default PlayerRoll;
