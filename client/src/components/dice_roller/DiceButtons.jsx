import "./dice.css";

const DiceButtons = ({ diceCount, setDiceCount }) => {
    return (
        <section className="section__dice_buttons">
            <button
                onClick={() => setDiceCount((diceCount += 1))}
                className="button__dice"
            >
                +
            </button>
            <button
                onClick={() =>
                    setDiceCount(
                        diceCount > 0 ? (diceCount -= 1) : (diceCount = 0)
                    )
                }
                className="button__dice button__dice_red"
            >
                -
            </button>
        </section>
    );
};

export default DiceButtons;
