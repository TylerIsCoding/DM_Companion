import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Player from "./Player";

const InitList = ({ add, setAdd }) => {
    const [playerArray, setPlayerArray] = useState("");

    const getPlayers = async () => {
        try {
            const response = await axios.get("encounter/getPlayers", {
                withCredentials: true,
            });
            if (response?.data) {
                setPlayerArray(response.data || []);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getPlayers();
    }, []);

    const toggleAddPage = () => {
        const status = add;
        setAdd(!status);
    };

    const clearPlayers = async () => {
        try {
            const response = await axios.put("encounter/clearPlayers", {
                withCredentials: true,
            });
            if (response?.data) {
                getPlayers();
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1>Initiative Tracker</h1>
            <ul className="ul__player_list">
                {playerArray.length > 0
                    ? playerArray.map((el, i) => {
                          return (
                              <Player
                                  id={el[0].id}
                                  key={el[0].id}
                                  name={el[0].name}
                                  color={el[0].color}
                                  getPlayers={getPlayers}
                              />
                          );
                      })
                    : ""}
            </ul>
            <section className="section__init_tracker_btn_container">
                <button
                    onClick={() => toggleAddPage()}
                    className="button__init_tracker button__init_add"
                >
                    Add
                </button>
                <button
                    onClick={() => clearPlayers()}
                    className="button__init_tracker button__init_clear"
                >
                    Clear
                </button>
                <button className="button__init_tracker button__init_start">
                    Start
                </button>
            </section>
        </>
    );
};

export default InitList;
