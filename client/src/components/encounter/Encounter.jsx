import { useEffect, useState } from "react";
import DiceRoller from "../dice_roller/DiceRoller";
import RollHistory from "../dice_roller/RollHistory";
import InitTracker from "../init_tracker/InitTracker";
import HealthTracker from "../health_tracker/HealthTracker";
import "./encounter.css";

const Encounter = ({ setPageRight }) => {
    const [rollHistory, setRollHistory] = useState("");

    useEffect(() => {
        setPageRight(<HealthTracker />);
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
