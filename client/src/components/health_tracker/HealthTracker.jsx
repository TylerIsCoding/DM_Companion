import { useState, useEffect } from "react";
import HealthTrackerList from "./HealthTrackerList";
import "./health_tracker.css";

const HealthTracker = () => {
    const [enemyArray, setEnemyArray] = useState([]);
    // const [addPage, setAddPage] = useState(false);

    return (
        <section className="section__health_tracker">
            <>
                <HealthTrackerList
                    enemyArray={enemyArray}
                    setEnemyArray={setEnemyArray}
                />
            </>
        </section>
    );
};

export default HealthTracker;
