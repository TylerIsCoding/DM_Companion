import "./health_tracker.css";
import axios from "../../api/axios";
import AddEnemy from "./AddEnemy";
import Enemy from "./Enemy";
import { useEffect, useState } from "react";

const HealthTrackerList = ({ page, setPage }) => {
    const [enemyArray, setEnemyArray] = useState([]);

    const toggleAddPage = () => {
        setPage(
            <AddEnemy
                page={page}
                setPage={setPage}
                enemyArray={enemyArray}
                setEnemyArray={setEnemyArray}
            />
        );
    };

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

    const clearEnemies = async () => {
        try {
            const response = await axios.put("encounter/clearEnemies", {
                withCredentials: true,
            });
            if (response?.data) {
                setEnemyArray([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getEnemies();
    }, []);

    return (
        <>
            <h1>Health Tracker</h1>
            <ul className="ul__enemy_list">
                {enemyArray.length > 0
                    ? enemyArray.map((el, i) => {
                          return (
                              <li key={i} className="li__enemy">
                                  <Enemy
                                      id={el.id}
                                      name={el.name}
                                      hp={el.hp}
                                      maxHP={el.maxHP}
                                      color={el.color}
                                      getEnemies={getEnemies}
                                  />
                              </li>
                          );
                      })
                    : ""}
            </ul>
            <section className="section__health_tracker_btn_container">
                <button
                    className="button__clear_enemies"
                    onClick={() => clearEnemies()}
                >
                    Clear All
                </button>
                <button
                    className="button__add_enemy"
                    onClick={() => toggleAddPage()}
                >
                    Add Character
                </button>
            </section>
        </>
    );
};

export default HealthTrackerList;
