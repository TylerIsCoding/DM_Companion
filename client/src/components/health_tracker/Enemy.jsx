import "./health_tracker.css";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Enemy = ({ id, name, hp, color }) => {
    const maxHp = hp;

    return (
        <>
            <section
                className="section__enemy_name_container"
                style={{ backgroundColor: color }}
            >
                {name
                    ? name.length > 30
                        ? (name = name.slice(0, 27) + "...")
                        : name
                    : "N"}
            </section>
            <section className="section__enemy_info_container">
                <section className="section__enemy_hp">
                    <h1>HP</h1>
                    <span>
                        {hp}/{maxHp}
                    </span>
                </section>
                <section>
                    <input type="number" name="health_mod" id="health_mod" />
                    <button>+</button>
                    <button>-</button>
                </section>
                <section>
                    <span className="span__enemy_icons">
                        <FontAwesomeIcon icon={faEdit} />
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </section>
            </section>
        </>
    );
};

export default Enemy;
