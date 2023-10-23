import { useEffect, useState } from "react";
import PageTitle from "../page_title/PageTitle";
import DiceRoller from "../dice_roller/DiceRoller";
import RollHistory from "../dice_roller/RollHistory";
import InitTracker from "../init_tracker/InitTracker";
import "./encounter.css";

const Encounter = ({ setPageRight }) => {
    const [rollHistory, setRollHistory] = useState("");

    useEffect(() => {
        setPageRight(<PageTitle />);
    }, [setPageRight]);

    return (
        <section className="section__dice_roller">
            <div className="div__encounter_top">
                <RollHistory
                    rollHistory={rollHistory}
                    setRollHistory={setRollHistory}
                />
                <InitTracker />
            </div>
            <DiceRoller setRollHistory={setRollHistory} />
        </section>
    );
};

export default Encounter;
