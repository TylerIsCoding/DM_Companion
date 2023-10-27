import PlayerRoll from "./PlayerRoll";
import InitList from "./InitList";
import Combat from "./Combat";
import "./init_tracker.css";

const EnterRolls = ({ page, setPage, playerArray, setPlayerArray }) => {
    const cancel = () => {
        setPage(<InitList page={page} setPage={setPage} />);
    };

    const combat = () => {
        const sorted = playerArray.sort((a, b) => b.totalRoll - a.totalRoll);
        setPlayerArray(sorted);
        setPage(
            <Combat
                page={page}
                setPage={setPage}
                playerArray={playerArray}
                setPlayerArray={setPlayerArray}
            />
        );
    };

    return (
        <>
            <h1>Enter Rolls</h1>
            <ul className="ul__player_list">
                {playerArray
                    ? playerArray.map((el, i) => {
                          return (
                              <li key={i}>
                                  <PlayerRoll
                                      id={el.id}
                                      name={el.name}
                                      color={el.color}
                                      mod={el.modifier}
                                      total={el.totalRoll}
                                      playerArray={playerArray}
                                      setPlayerArray={setPlayerArray}
                                  />
                              </li>
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
                    onClick={() => combat()}
                    className="button__init_tracker button__init_begin"
                >
                    Begin Combat!
                </button>
            </section>
        </>
    );
};

export default EnterRolls;
