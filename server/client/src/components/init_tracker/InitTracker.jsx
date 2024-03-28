import { useState, useEffect } from "react";
import InitList from "./InitList";
import "./init_tracker.css";

const InitTracker = () => {
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(<InitList page={page} setPage={setPage} />);
    }, []);

    return <section className="section__init_tracker">{page}</section>;
};

export default InitTracker;
