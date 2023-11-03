import "./health_tracker.css";
import { faTrash, faEdit, faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Enemy = ({ id, name, hp, maxHP, color, getEnemies }) => {
    const [healthMod, setHealthMod] = useState();
    const [nameDisplay, setNameDisplay] = useState(name);

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

    useEffect(() => {
        if (name.length > 30) {
            setNameDisplay(name.slice(0, 20) + "...");
        }
    }, []);

    return (
        <>
            <section
                className="section__enemy_name_container"
                style={{ backgroundColor: color }}
            >
                {hp === 0 ? (
                    <>
                        <FontAwesomeIcon
                            icon={faSkull}
                            className="icon__skull"
                        />
                        {nameDisplay}
                        <FontAwesomeIcon
                            icon={faSkull}
                            className="icon__skull"
                        />
                    </>
                ) : (
                    nameDisplay
                )}
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
