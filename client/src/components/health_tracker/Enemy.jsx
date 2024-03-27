import "./health_tracker.css";
import { faTrash, faEdit, faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EditEnemy from "./EditEnemy";
import axios from "../../api/axios";

const Enemy = ({
    id,
    name,
    hp,
    maxHP,
    color,
    textColor,
    getEnemies,
    page,
    setPage,
}) => {
    const [healthMod, setHealthMod] = useState();

    const addHealth = async () => {
        document.getElementById(`${id}_health_mod`).value = "";
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
        document.getElementById(`${id}_health_mod`).value = "";
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

    const editEnemy = async () => {
        setPage(
            <EditEnemy
                id={id}
                name={name}
                hp={hp}
                maxHP={maxHP}
                color={color}
                textColor={textColor}
                getEnemies={getEnemies}
                page={page}
                setPage={setPage}
            />
        );
    };

    return (
        <>
            <section
                className="section__enemy_name_container"
                style={{
                    backgroundColor: color,
                    color: textColor,
                    border: textColor === "black" ? "2px solid black" : "none",
                    borderBottom: "none",
                }}
            >
                {hp === 0 ? (
                    <>
                        <FontAwesomeIcon
                            icon={faSkull}
                            className="icon__skull"
                        />
                        {name}
                        <FontAwesomeIcon
                            icon={faSkull}
                            className="icon__skull"
                        />
                    </>
                ) : (
                    name
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
                        id={`${id}_health_mod`}
                        className="health_mod"
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
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => editEnemy()}
                        />
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
