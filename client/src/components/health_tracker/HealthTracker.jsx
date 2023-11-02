import { useState, useEffect } from "react";
import axios from "../../api/axios";
import HealthTrackerList from "./HealthTrackerList";
import "./health_tracker.css";

const HealthTracker = () => {
    const [enemyArray, setEnemyArray] = useState("");
    // const [addPage, setAddPage] = useState(false);

    const getEnemies = async () => {
        try {
            const response = await axios.get("encounter/getEnemies", {
                withCredentials: true,
            });
            if (response?.data) {
                setEnemyArray(response.data.enemies || []);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getEnemies();
    }, []);

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
