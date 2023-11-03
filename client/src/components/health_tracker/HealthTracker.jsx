import { useState, useEffect } from "react";
import HealthTrackerList from "./HealthTrackerList";
import "./health_tracker.css";

const HealthTracker = () => {
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(<HealthTrackerList page={page} setPage={setPage} />);
    }, []);

    return <section className="section__health_tracker">{page}</section>;
};

export default HealthTracker;
