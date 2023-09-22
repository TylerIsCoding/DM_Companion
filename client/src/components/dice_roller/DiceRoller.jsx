import DiceImage from "./DiceImage";
import DiceButtons from "./DiceButtons";
import { useState } from "react";
import "./dice.css";

const DiceRoller = () => {
    const [d4Count, setD4Count] = useState(0);
    const [d6Count, setD6Count] = useState(0);
    const [d8Count, setD8Count] = useState(0);
    const [d10Count, setD10Count] = useState(0);
    const [d12Count, setD12Count] = useState(0);
    const [d20Count, setD20Count] = useState(0);

    const [currentRoll, setCurrentRoll] = useState("");

    const clearAll = () => {
        setD4Count(0);
        setD6Count(0);
        setD8Count(0);
        setD10Count(0);
        setD12Count(0);
        setD20Count(0);
        setCurrentRoll("");
    };

    const roll = () => {
        let total = 0;
        for (let i = 0; i < d4Count; i++) {
            total += Math.floor(Math.random() * 4 + 1);
        }
        for (let i = 0; i < d6Count; i++) {
            total += Math.floor(Math.random() * 6 + 1);
        }
        for (let i = 0; i < d8Count; i++) {
            total += Math.floor(Math.random() * 8 + 1);
        }
        for (let i = 0; i < d10Count; i++) {
            total += Math.floor(Math.random() * 10 + 1);
        }
        for (let i = 0; i < d12Count; i++) {
            total += Math.floor(Math.random() * 12 + 1);
        }
        for (let i = 0; i < d20Count; i++) {
            total += Math.floor(Math.random() * 20 + 1);
        }
        setCurrentRoll(total);
    };

    return (
        <>
            <h1 className="h1__dice_title">Dice Roller</h1>
            <section className="container__dice_images">
                <DiceImage src={"d4.png"} alt={"D4"} diceCount={d4Count} />
                <DiceImage src={"d6.png"} alt={"D6"} diceCount={d6Count} />
                <DiceImage src={"d8.png"} alt={"D8"} diceCount={d8Count} />
                <DiceImage src={"d10.png"} alt={"D10"} diceCount={d10Count} />
                <DiceImage src={"d12.png"} alt={"D12"} diceCount={d12Count} />
                <DiceImage src={"d20.png"} alt={"D20"} diceCount={d20Count} />
            </section>
            <section className="container__buttons">
                <DiceButtons diceCount={d20Count} setDiceCount={setD20Count} />
                <DiceButtons diceCount={d12Count} setDiceCount={setD12Count} />
                <DiceButtons diceCount={d10Count} setDiceCount={setD10Count} />
                <DiceButtons diceCount={d8Count} setDiceCount={setD8Count} />
                <DiceButtons diceCount={d6Count} setDiceCount={setD6Count} />
                <DiceButtons diceCount={d4Count} setDiceCount={setD4Count} />
            </section>
            <section className="container__result">
                <button
                    className="button__roll_clear button__dice_red"
                    onClick={() => clearAll()}
                >
                    Clear
                </button>
                <div className="container__roll_result">
                    {currentRoll > 0 ? currentRoll : ""}
                </div>
                <button className="button__roll_clear" onClick={() => roll()}>
                    Roll
                </button>
            </section>
        </>
    );
};

export default DiceRoller;
