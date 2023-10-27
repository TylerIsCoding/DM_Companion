import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";
import EnterRolls from "./EnterRolls";

const InitList = ({ page, setPage }) => {
    const [playerArray, setPlayerArray] = useState("");
    const [editable, setEditable] = useState(true);

    const getPlayers = async () => {
        try {
            const response = await axios.get("encounter/getPlayers", {
                withCredentials: true,
            });
            if (response?.data) {
                setPlayerArray(response.data.initMembers || []);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getPlayers();
        setEditable(true);
    }, [setPage, editable]);

    const toggleAddPage = () => {
        setPage(<AddPlayer page={page} setPage={setPage} />);
    };

    const toggleEnterRollsPage = () => {
        setPage(
            <EnterRolls
                page={page}
                setPage={setPage}
                playerArray={playerArray}
                setPlayerArray={setPlayerArray}
            />
        );
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
                    ? playerArray.map((el) => {
                          return (
                              <li
                                  key={el.id}
                                  className="li__init_player"
                                  style={{ backgroundColor: el.color }}
                              >
                                  <Player
                                      page={page}
                                      setPage={setPage}
                                      id={el.id}
                                      name={el.name}
                                      mod={el.modifier}
                                      color={el.color}
                                      getPlayers={getPlayers}
                                      editable={editable}
                                  />
                              </li>
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
                <button
                    onClick={() => toggleEnterRollsPage()}
                    className="button__init_tracker button__init_start"
                >
                    Start
                </button>
            </section>
        </>
    );
};

export default InitList;
