import "./health_tracker.css";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "../../api/axios";

const Enemy = ({ id, name, hp, maxHP, color, getEnemies }) => {
    const [healthMod, setHealthMod] = useState();

    const addHealth = async () => {
        const adj =
            Number(hp) + Number(healthMod || 0) > Number(maxHP)
                ? Number(maxHP)
                : Number(hp) + Number(healthMod || 0);
        try {
            const response = await axios.put("encounter/adjustHealth", {
                id: id,
                adjustment: adj,
            });
            if (response?.data) {
                getEnemies();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const subHealth = async () => {
        const adj =
            Number(hp) - Number(healthMod || 0) <= 0
                ? 0
                : Number(hp) - Number(healthMod || 0);
        try {
            const response = await axios.put("encounter/adjustHealth", {
                id: id,
                adjustment: adj,
            });
            if (response?.data) {
                getEnemies();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const deleteEnemy = async () => {
        try {
            const response = await axios.put("encounter/deleteEnemy", {
                id: id,
            });
            if (response?.data) {
                getEnemies();
            }
        } catch (e) {
            console.error(e);
        }
    };

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
                    : "N/A"}
            </section>
            <section className="section__enemy_info_container">
                <section className="section__enemy_hp">
                    <h1>HP</h1>
                    <span>
                        {hp}/{maxHP}
                    </span>
                </section>
                <section className="section__enemy_mod_health_container">
                    <input
                        type="number"
                        name="health_mod"
                        id="health_mod"
                        autoComplete="false"
                        onChange={(e) => {
                            setHealthMod(e.target.value);
                        }}
                    />
                    <div className="div__button_holder">
                        <button
                            className="button__add_health"
                            onClick={addHealth}
                        >
                            +
                        </button>
                        <button
                            className="button__sub_health"
                            onClick={subHealth}
                        >
                            -
                        </button>
                    </div>
                </section>
                <section>
                    <span className="span__enemy_icons">
                        <FontAwesomeIcon icon={faEdit} />
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => deleteEnemy()}
                        />
                    </span>
                </section>
            </section>
        </>
    );
};

export default Enemy;
