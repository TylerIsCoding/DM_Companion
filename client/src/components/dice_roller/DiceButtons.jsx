import "./dice.css";

const DiceButtons = ({ id }) => {
    const addDice = () => {
        console.log("Added!");
    };

    const subDice = () => {
        console.log("Subtracted!");
    };

    return (
        <section className="section__dice_buttons">
            <button onClick={addDice} className="button__dice">
                +
            </button>
            <button onClick={subDice} className="button__dice button__dice_red">
                -
            </button>
        </section>
    );
};

export default DiceButtons;
