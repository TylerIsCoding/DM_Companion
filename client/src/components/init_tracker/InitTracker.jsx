import { useState, useEffect } from "react";
import AddPlayer from "./AddPlayer";
import InitList from "./InitList";
import "./init_tracker.css";

const InitTracker = () => {
    const [add, setAdd] = useState("");

    useEffect(() => {
        setAdd(add);
    }, [add]);

    return (
        <section className="section__init_tracker">
            {add ? (
                <AddPlayer add={add} setAdd={setAdd} />
            ) : (
                <InitList add={add} setAdd={setAdd} />
            )}
        </section>
    );
};

export default InitTracker;
