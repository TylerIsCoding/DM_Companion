import "./health_tracker.css";

const HealthTrackerList = ({ enemyArray, setEnemyArray }) => {
    return (
        <>
            <h1>Enemy Health Tracker</h1>
            <ul className="ul__enemy_list">
                {enemyArray.length > 0
                    ? enemyArray.map((el, i) => {
                          return <li key={i} className="li__enemy"></li>;
                      })
                    : ""}
            </ul>
            <section className="section__health_tracker_btn_container">
                <button className="button__clear_enemies">Clear All</button>
                <button className="button__add_enemy">Add Enemy</button>
            </section>
        </>
    );
};

export default HealthTrackerList;
