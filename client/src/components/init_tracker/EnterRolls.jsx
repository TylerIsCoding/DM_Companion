import { useState } from "react";
import PlayerRoll from "./PlayerRoll";
import InitList from "./InitList";
import "./init_tracker.css";

const EnterRolls = ({ page, setPage, playerArray }) => {
    const array = useState(playerArray.flat());
    const cancel = () => {
        setPage(<InitList page={page} setPage={setPage} />);
    };

    return (
        <>
            <h1>Enter Rolls</h1>
            <ul className="ul__player_list">
                {array
                    ? array[0].map((el, i) => {
                          return (
                              <PlayerRoll
                                  id={el.id}
                                  name={el.name}
                                  color={el.color}
                              />
                          );
                      })
                    : ""}
            </ul>
            <section className="section__init_tracker_btn_container">
                <button
                    onClick={() => cancel()}
                    className="button__init_tracker button__init_cancel"
                >
                    Cancel
                </button>
                <button
                    // onClick=""
                    className="button__init_tracker button__init_begin"
                >
                    Begin Combat!
                </button>
            </section>
        </>
    );
};

export default EnterRolls;
