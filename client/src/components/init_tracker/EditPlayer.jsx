import { axiosPrivate } from "../../api/axios";
import { useState } from "react";
import "./init_tracker.css";
import InitList from "./InitList";

const EditPlayer = ({
    page,
    setPage,
    id,
    playerName,
    modifier,
    playerColor,
}) => {
    const [name, setName] = useState(playerName);
    const [mod, setMod] = useState(modifier);
    const [color, setColor] = useState(playerColor);

    const namePlaceHolder = playerName;

    const editPlayer = async () => {
        try {
            const response = await axiosPrivate.put(
                "encounter/editPlayer",
                { id: id, name: name, modifier: mod, color: color },
                {
                    withCredentials: true,
                }
            );
            if (response?.data) {
                setPage(<InitList page={page} setPage={setPage} />);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const cancelEdit = () => {
        setPage(<InitList page={page} setPage={setPage} />);
    };

    return (
        <>
            <h1>Edit {namePlaceHolder}</h1>
            <form
                onSubmit={editPlayer}
                className="form__addPlayer"
                autoComplete="off"
            >
                <label className="label__form" htmlFor="player_name">
                    Name:
                    <input
                        id="player_name"
                        type="text"
                        name="input__player_name"
                        value={name}
                        required
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </label>
                <label className="label__form" htmlFor="player_init_mod">
                    Initiative Modifier:
                    <input
                        id="player_init_mod"
                        type="number"
                        name="input__player_init_mod"
                        value={mod || 0}
                        required
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            setMod(e.target.value);
                        }}
                    ></input>
                </label>
                <label className="label__form" htmlFor="player_init_color">
                    Choose color:
                    <input
                        id="player_init_color"
                        type="color"
                        name="input__player_color"
                        value={color}
                        required
                        className="input__text input__color"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    ></input>
                </label>
            </form>
            <section className="section__init_tracker_btn_container">
                <button
                    onClick={editPlayer}
                    className="button__init_tracker button__init_add"
                >
                    Edit
                </button>
                <button
                    onClick={() => cancelEdit()}
                    className="button__init_tracker button__init_cancel"
                >
                    Cancel
                </button>
            </section>
        </>
    );
};

export default EditPlayer;
