import { useEffect } from "react";
import PageTitle from "../page_title/PageTitle";
import DiceRoller from "../dice_roller/DiceRoller";
import "./encounter.css";

const Encounter = ({ setPageRight }) => {
    useEffect(() => {
        setPageRight(<PageTitle />);
    }, [setPageRight]);

    return (
        <section className="section__dice_roller">
            <DiceRoller />
        </section>
    );
};

export default Encounter;
