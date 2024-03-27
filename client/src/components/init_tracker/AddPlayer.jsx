import { useState } from "react";
import InitList from "./InitList";
import { axiosPrivate } from "../../api/axios";
import "./init_tracker.css";

const AddPlayer = ({ page, setPage }) => {
    const [name, setName] = useState("");
    const [mod, setMod] = useState("");
    const [color, setColor] = useState("#000000");

    const addPlayer = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.put(
                "encounter/addPlayer",
                { name: name, modifier: mod, color: color },
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

    const cancelAdd = () => {
        setPage(<InitList page={page} setPage={setPage} />);
    };

    return (
        <>
            <h1>Add Player</h1>
            <form
                onSubmit={addPlayer}
                className="form__addPlayer"
                autoComplete="off"
            >
                <label className="label__form" htmlFor="player_name">
                    Name:{" "}
                    <input
                        id="player_name"
                        type="text"
                        name="input__player_name"
                        placeholder="Enter player name"
                        required
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </label>
                <label className="label__form" htmlFor="player_init_mod">
                    Initiative Modifier:{" "}
                    <input
                        id="player_init_mod"
                        type="number"
                        name="input__player_init_mod"
                        placeholder="Enter initiative modifier"
                        required
                        className="input__text input__init"
                        spellCheck="false"
                        onChange={(e) => {
                            setMod(e.target.value);
                        }}
                    ></input>
                </label>
                <label className="label__form" htmlFor="player_init_color">
                    Choose color:{" "}
                    <input
                        id="player_init_color"
                        type="color"
                        name="input__player_color"
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
                    onClick={addPlayer}
                    className="button__init_tracker button__init_add"
                >
                    Add
                </button>
                <button
                    onClick={() => cancelAdd()}
                    className="button__init_tracker button__init_cancel"
                >
                    Cancel
                </button>
            </section>
        </>
    );
};

export default AddPlayer;
