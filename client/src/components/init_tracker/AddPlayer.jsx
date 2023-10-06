import "./init_tracker.css";

const AddPlayer = ({ add, setAdd }) => {
    const addPlayer = () => {
        console.log("");
    };

    const cancelAdd = () => {
        const status = add;
        setAdd(!status);
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
                    ></input>
                </label>
            </form>
            <section className="section__init_tracker_btn_container">
                <button className="button__init_tracker button__init_add">
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
