import DiceImage from "./DiceImage";
import DiceButtons from "./DiceButtons";
import "./dice.css";

const DiceRoller = () => {
    return (
        <>
            <h1 className="h1__dice_title">Dice Roller</h1>
            <section className="container__dice_images">
                <DiceImage src={"d4.png"} alt={"D4"} />
                <DiceImage src={"d6.png"} alt={"D6"} />
                <DiceImage src={"d8.png"} alt={"D8"} />
                <DiceImage src={"d10.png"} alt={"D10"} />
                <DiceImage src={"d12.png"} alt={"D12"} />
                <DiceImage src={"d20.png"} alt={"D20"} />
            </section>
            <section className="container__buttons">
                <DiceButtons />
                <DiceButtons />
                <DiceButtons />
                <DiceButtons />
                <DiceButtons />
                <DiceButtons />
            </section>
        </>
    );
};

export default DiceRoller;
