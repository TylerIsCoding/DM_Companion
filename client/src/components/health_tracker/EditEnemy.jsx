import { useState } from "react";
import axios from "../../api/axios";
import HealthTrackerList from "./HealthTrackerList";

const EditEnemy = ({
    id,
    name,
    type,
    maxHP,
    color,
    page,
    setPage,
    enemyArray,
    setEnemyArray,
}) => {
    const [storedName, setStoredName] = useState(name);
    const [storedMaxHP, setStoredMaxHP] = useState(maxHP);
    const [storedColor, setStoredColor] = useState(color);
    const [storedType, setStoredType] = useState(type);

    const [npcColor, setNpcColor] = useState("#646464");
    const [playerColor, setPlayerColor] = useState("#4c74a3");
    const [enemyColor, setEnemyColor] = useState("#a34c50");

    const onRadioChange = (e) => {
        setStoredType(e.target.value);
    };

    const cancel = () => {
        setPage(
            <HealthTrackerList
                page={page}
                setPage={setPage}
                enemyArray={enemyArray}
                setEnemyArray={setEnemyArray}
            />
        );
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(
                "encounter/editEnemy",
                {
                    id: id,
                    name: storedName,
                    maxHP: storedMaxHP,
                    type: storedType,
                    color: storedColor,
                },
                {
                    withCredentials: true,
                }
            );
            if (response?.data) {
                setPage(
                    <HealthTrackerList
                        enemyArray={enemyArray}
                        setEnemyArray={setEnemyArray}
                        page={page}
                        setPage={setPage}
                    />
                );
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>Edit {storedName}</h1>
            <form onSubmit="" className="form__add_enemy" autoComplete="off">
                <label
                    className="label__form label__enemy"
                    htmlFor="enemy_name"
                >
                    Character name{" "}
                    <input
                        id="enemy_name"
                        type="text"
                        name="input__enemy_name"
                        placeholder="Enter character name"
                        value={storedName}
                        required
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            setStoredName(e.target.value);
                        }}
                    ></input>
                </label>
                <label className="label__form label__enemy" htmlFor="enemy_hp">
                    Total hit points{" "}
                    <input
                        id="enemy_hp"
                        type="number"
                        name="input__enemy_hp"
                        placeholder="Enter hit points"
                        value={storedMaxHP}
                        required
                        min={0}
                        max={9999}
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            if (e.target.value > 9999) {
                                e.target.value = 9999;
                            } else if (e.target.value < 0) {
                                e.target.value = 0;
                            }
                            setStoredMaxHP(e.target.value);
                        }}
                    ></input>
                </label>
                <label
                    className="label__form label__enemy"
                    htmlFor="enemy_type"
                >
                    Select character type{" "}
                    <section className="section__radio_inputs">
                        <div className="div__input_container">
                            <div className="div__radio_container">
                                <input
                                    id="radio_npc"
                                    value="npc"
                                    type="radio"
                                    name="input__radio"
                                    required
                                    className="input__type"
                                    onChange={(e) => {
                                        onRadioChange(e);
                                        setStoredColor(npcColor);
                                    }}
                                ></input>
                                NPC
                            </div>
                            <input
                                type="color"
                                name="input_npc_color"
                                id="color_npc"
                                value={npcColor}
                                onChange={(e) => {
                                    setNpcColor(e.target.value);
                                    if (type === "npc") {
                                        setStoredColor(npcColor);
                                    }
                                }}
                            />
                        </div>
                        <div className="div__input_container">
                            <div className="div__radio_container">
                                <input
                                    id="radio_enemy"
                                    type="radio"
                                    value="enemy"
                                    name="input__radio"
                                    required
                                    className="input__type"
                                    onChange={(e) => {
                                        onRadioChange(e);
                                        setStoredColor(enemyColor);
                                    }}
                                ></input>
                                Enemy
                            </div>
                            <input
                                type="color"
                                name="input_enemy_color"
                                id="color_enemy"
                                value={enemyColor}
                                onChange={(e) => {
                                    setEnemyColor(e.target.value);
                                    if (type === "enemy") {
                                        setStoredColor(enemyColor);
                                    }
                                }}
                            />
                        </div>
                        <div className="div__input_container">
                            <div className="div__radio_container">
                                <input
                                    id="radio_player"
                                    type="radio"
                                    value="player"
                                    name="input__radio"
                                    required
                                    className="input__type"
                                    onChange={(e) => {
                                        onRadioChange(e);
                                        setStoredColor(playerColor);
                                    }}
                                ></input>
                                Player
                            </div>
                            <input
                                type="color"
                                name="input_player_color"
                                id="color_player"
                                value={playerColor}
                                onChange={(e) => {
                                    setPlayerColor(e.target.value);
                                    if (type === "player") {
                                        setStoredColor(playerColor);
                                    }
                                }}
                            />
                        </div>
                    </section>
                </label>
            </form>
            <section className="section__health_tracker_btn_container">
                <button
                    className="button__clear_enemies button__cancel"
                    onClick={cancel}
                >
                    Cancel
                </button>
                <button
                    className="button__add_enemy button__confirm"
                    onClick={handleSubmit}
                >
                    Confirm
                </button>
            </section>
        </>
    );
};

export default EditEnemy;
